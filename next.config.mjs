import path from "node:path";
const nextConfig = {
  sassOptions: {
    includePaths: [path.join('/app/styles', 'styles')],
  },
};

export default nextConfig;
