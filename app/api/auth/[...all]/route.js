import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
 
export const { POST, GET } = toNextJsHandler(auth);


//auth[../all]/route.js - Designated to handle all auth routes
// This file is used to handle all auth routes. It uses the toNextJsHandler function from the better-auth package to create a handler for the auth routes. The handler is then exported as POST and GET methods. The auth object is imported from the lib/auth.js file, which contains the configuration for the better-auth package. The handler will handle all auth routes, including login, logout, and session management.
// The POST method is used to handle login requests, while the GET method is used to handle session requests. The handler will automatically handle the requests and return the appropriate response based on the auth configuration.

