import type { NextConfig } from "next";
import {
  PHASE_DEVELOPMENT_SERVER,
  type PHASE_EXPORT,
  type PHASE_INFO,
  type PHASE_PRODUCTION_BUILD,
  type PHASE_PRODUCTION_SERVER,
  type PHASE_TEST,
} from "next/constants";

type NextConfigFunction = (
  phase:
    | typeof PHASE_DEVELOPMENT_SERVER
    | typeof PHASE_EXPORT
    | typeof PHASE_INFO
    | typeof PHASE_PRODUCTION_BUILD
    | typeof PHASE_PRODUCTION_SERVER
    | typeof PHASE_TEST,
  options: {
    defaultConfig: NextConfig;
  },
) => Promise<NextConfig> | NextConfig;

const configFn: NextConfigFunction = async (phase, { defaultConfig }) => {
  const baseConf: NextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
    output: "export",
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    skipTrailingSlashRedirect: true,
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // Dev-specific settings
    baseConf.assetPrefix = `http://${process.env.TAURI_DEV_HOST || "localhost"}:3000`;
  }

  return baseConf;
};

export default configFn;
