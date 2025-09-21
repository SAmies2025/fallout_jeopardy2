/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {};

// next.config.js (ESM style)
export default {
  reactStrictMode: true,
  //swcMinify: true, depricated. Minifies code. using SWC. Now does this by default
};