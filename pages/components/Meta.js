import Head from "next/head";
import { FAVICON, APP_NAME } from "../variables/global";
export default function Meta() {
  return (
    <Head>
      <title>{APP_NAME}</title>
      <link
        rel="icon"
        href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${FAVICON}</text></svg>`}
      />
    </Head>
  );
}
