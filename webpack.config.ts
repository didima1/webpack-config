import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import path from 'path'
import { BuildOptions, EnvTypes } from './config/build/types/types'

export default (env: EnvTypes): webpack.Configuration => {
   const isDev = env.mode === 'development'
   const isProd = env.mode === 'production'
   const paths: BuildOptions['paths'] = {
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      public: path.resolve(__dirname, 'public'),
   }

   return buildWebpack({
      platform: env.platform ?? 'desktop',
      mode: env.mode ?? 'development',
      port: env.port ?? 3000,
      analyzer: env.analyzer,
      isDev,
      isProd,
      paths,
   })
}
