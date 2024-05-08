// import { NextAuthConfig } from 'next-auth';

// export const authConfig = {
//   providers: [],
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const allowedUrls = ['/public/', '/about']; // 제외하고 싶은 URL 패턴 배열

//       // URL 패턴 확인
//       const isPublicUrl = allowedUrls.some((url) => nextUrl.pathname.startsWith(url));

//       if (isPublicUrl) {
//         return true; // 제외된 URL은 인증 없이 접근 허용
//       } else if (nextUrl.pathname.startsWith('/dashboard')) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', nextUrl));
//       }
//       return true;
//     },
//   },
// };


export const authConfig = {
  providers:[],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request}) {
      const isLoggedIn = !auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', request.nextUrl));
      }
      return true;
    },
  },
} 
