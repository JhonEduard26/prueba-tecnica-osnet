// app/api/auth/[auth0]/route.ts
import {
  AfterCallbackAppRoute,
  AppRouteHandlerFnContext,
  getSession,
  handleAuth,
  handleCallback,
  Session,
} from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";

const afterCallback: AfterCallbackAppRoute = (
  req: NextRequest,
  session: Session
) => {
  if (session.user) {
    return session;
  }
};

export const GET = handleAuth({
  async callback(req: NextRequest, ctx: AppRouteHandlerFnContext) {
    const res = (await handleCallback(req, ctx, {
      afterCallback,
    })) as NextResponse;
    const session = await getSession(req, res);

    if (session) {
      return NextResponse.redirect(
        `${process.env.AUTH0_BASE_URL}/dashboard`,
        res
      );
    } else {
      return NextResponse.redirect(`${process.env.AUTH0_BASE_URL}/`, res);
    }
  },
  onError(req: Request, error: Error) {
    console.error(error);
  },
});
