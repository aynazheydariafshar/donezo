import createMiddleware from "next-intl/middleware";
// import { NextRequest } from "next/server";

// export default async function middleware(request: NextRequest) {
//   const [, locale, ...segments] = request.nextUrl.pathname.split("/");

//   if (locale != null && segments.join("/") === "profile") {
//     const usesNewProfile =
//       (request.cookies.get("NEW_PROFILE")?.value || "false") === "true";

//     if (usesNewProfile) {
//       request.nextUrl.pathname = `/${locale}/profile/new`;
//     }
//   }

//   const handleI18nRouting = createMiddleware({
//     locales: ["en", "fa"],
//     defaultLocale: "en",
//   });
//   const response = handleI18nRouting(request);
//   return response;
// }

// export const config = {
//   matcher: ["/", "/(fa|en)/:path*"],
// };

import {
  authMiddleware,
  clerkMiddleware,
  createRouteMatcher,
  redirectToSignIn,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

export default clerkMiddleware(async (auth, req) => {
  // const { userId, orgId } = await auth();
  // if (userId && isPublicRoute(req)) {
  //   const path = orgId ? `/organization/${orgId}` : `/select-org`;
  //   return NextResponse.redirect(new URL(path, req.url));
  // }

  // if (!userId && !isPublicRoute(req)) {
  //   return auth().redirectToSignIn({ returnBackUrl: req.url });
  // }

  // if (!userId && !orgId && req.nextUrl.pathname !== `/select-org`) {
  //   return NextResponse.redirect(new URL(`/select-org`, req.url));
  // }

  // // Continue to the requested page if all checks pass
  // return NextResponse.next();
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/", "/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
