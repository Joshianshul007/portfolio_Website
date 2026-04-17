import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let currentPercent = 0;
    const interval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 10) + 5; // Fast random bumps
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(interval);
      }
      setPercent(currentPercent);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, setLoading: setPercent }}
    >
      {isLoading && <Loading percent={percent} />}
      <main className={`main-body ${!isLoading ? "main-active" : ""}`}>
        {children}
      </main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
