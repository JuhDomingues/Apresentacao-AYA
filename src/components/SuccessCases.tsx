import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Loader2, AlertCircle } from "lucide-react";
import light11 from "@/assets/Lights/11.png";
import light13 from "@/assets/Lights/13.png";
import logoCacauShow from "@/assets/Vídeos case/Logo Cacau Show.png";
import logoGlobalEra from "@/assets/Vídeos case/logo global era.png";
import { useEffect, useRef, useState } from "react";

const successCases = [
  {
    company: "Cacau Show",
    logo: logoCacauShow,
    industry: "Varejo",
    video: "https://youtube.com/shorts/ypNxgSsQFtI",
    poster: "/videos/cacau-show-poster.jpg",
    description: "Transformação digital no atendimento ao cliente e gestão de pedidos através de agentes inteligentes de IA.",
    results: [
      { metric: "+75%", label: "Satisfação do Cliente" },
      { metric: "-40%", label: "Tempo de Atendimento" },
    ],
  },
  {
    company: "Global Era",
    logo: logoGlobalEra,
    industry: "Indústria",
    video: "https://youtube.com/shorts/ryzz53UB56s",
    poster: "/videos/global-era-poster.jpg",
    description: "Otimização da gestão de estoque e vendas de rolamentos através de agentes inteligentes especializados.",
    results: [
      { metric: "+90%", label: "Eficiência Operacional" },
      { metric: "-65%", label: "Custos de Processo" },
    ],
  },
];

const getYouTubeEmbedUrl = (url: string): string | null => {
  // Extract YouTube video ID from various URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return `https://www.youtube-nocookie.com/embed/${match[1]}`;
    }
  }
  return null;
};

const LazyVideo = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const youtubeUrl = getYouTubeEmbedUrl(src);
  const isYouTube = youtubeUrl !== null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true);
          }

          // Pause video when out of viewport to save resources (only for local videos)
          if (!isYouTube && videoRef.current) {
            if (!entry.isIntersecting && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoad, isYouTube]);

  useEffect(() => {
    if (isYouTube) return; // Skip event listeners for YouTube

    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    const handleError = () => {
      setHasError(true);
      setIsBuffering(false);
    };
    const handleWaiting = () => setIsBuffering(true);
    const handlePlaying = () => setIsBuffering(false);
    const handleCanPlay = () => setIsBuffering(false);

    video.addEventListener('error', handleError);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [shouldLoad, isYouTube]);

  // YouTube iframe embed
  if (isYouTube) {
    return (
      <div ref={containerRef} className="relative w-full h-full bg-black">
        {shouldLoad ? (
          <iframe
            className="w-full h-full"
            src={`${youtubeUrl}?rel=0&modestbranding=1&playsinline=1`}
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center cursor-pointer relative group"
            style={{
              backgroundImage: `url(${poster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="relative z-10 w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Local video fallback
  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video
        ref={videoRef}
        controls
        className="w-full h-full object-contain"
        preload="none"
        controlsList="nodownload"
        playsInline
        poster={poster}
        src={shouldLoad ? src : undefined}
        style={{ backgroundColor: '#000' }}
      >
        <p className="text-white text-center p-4">
          Seu navegador não suporta a reprodução deste vídeo.
        </p>
      </video>

      {/* Buffering State */}
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/70 rounded-full p-4">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <AlertCircle className="w-10 h-10 text-destructive" />
            <p className="text-white text-sm font-medium">Erro ao carregar o vídeo</p>
            <p className="text-white/70 text-xs">Por favor, tente novamente mais tarde</p>
          </div>
        </div>
      )}
    </div>
  );
};

const SuccessCases = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={light11}
          alt=""
          className="absolute top-0 left-0 w-2/5 h-auto opacity-12"
        />
        <img
          src={light13}
          alt=""
          className="absolute bottom-0 right-0 w-1/3 h-auto opacity-10"
        />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Cases de Sucesso
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Empresas que Já Transformaram
              <br />
              <span className="text-primary font-bold">
                Seus Negócios com AYA
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successCases.map((successCase, index) => (
              <Card
                key={index}
                className="p-8 gradient-card border-primary/10 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 group overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Video Section */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-elegant group-hover:shadow-glow transition-smooth">
                    <LazyVideo src={successCase.video} poster={successCase.poster} />
                  </div>

                  {/* Company Info */}
                  <div>
                    {/* Company Logo */}
                    <div className="flex justify-center mb-4">
                      <img
                        src={successCase.logo}
                        alt={`Logo ${successCase.company}`}
                        className={`w-auto object-contain ${
                          successCase.company === "Global Era" ? "h-32" : "h-12"
                        }`}
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                        {successCase.industry}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {successCase.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Resultados Alcançados
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {successCase.results.map((result, idx) => (
                        <div key={idx} className="text-center p-4 rounded-lg bg-secondary/50">
                          <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
