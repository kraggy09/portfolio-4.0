"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  code: number;
}

export default function HeaderStatus() {
  const [time, setTime] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Update time in Kolkata (IST, UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch current weather in Kolkata
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=22.5726&longitude=88.3639&current=temperature_2m,weather_code"
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            code: data.current.weather_code,
          });
        }
      } catch (err) {
        // Silent fallback - show typical Kolkata temp
        setWeather({ temp: 30, code: 0 });
      }
    };

    fetchWeather();
    // Refresh weather every 15 minutes
    const interval = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Map WMO Weather Codes to beautiful Emojis / descriptions
  const getWeatherIcon = (code: number) => {
    if (code === 0) return "☀️";
    if ([1, 2, 3].includes(code)) return "🌤️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 61, 63, 65].includes(code)) return "🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
    if ([80, 81, 82].includes(code)) return "🌦️";
    if ([95, 96, 99].includes(code)) return "⛈️";
    return "🌡️";
  };

  return (
    <div className="hidden sm:flex items-center gap-3 bg-tag-bg backdrop-blur-md border border-tag-border px-3.5 py-1.5 rounded-full shadow-lg transition-all duration-300 hover:border-accent/25 ml-auto shrink-0 whitespace-nowrap">
      {/* Live status dot */}
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
      </span>
      
      {/* Location */}
      <span className="text-[11px] font-mono text-dim uppercase tracking-wider font-semibold">
        Kolkata
      </span>

      {/* Vertical divider */}
      <span className="w-[1px] h-3 bg-border shrink-0"></span>

      {/* Clock */}
      <div className="flex items-center gap-1 text-[11px] font-mono text-dim shrink-0">
        <span>{time || "00:00 AM"}</span>
      </div>

      {weather !== null && (
        <>
          {/* Vertical divider */}
          <span className="w-[1px] h-3 bg-border shrink-0"></span>
          {/* Temp */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-dim shrink-0">
            <span className="text-[12px]">{getWeatherIcon(weather.code)}</span>
            <span className="font-semibold text-text">{weather.temp}°C</span>
          </div>
        </>
      )}
    </div>
  );
}
