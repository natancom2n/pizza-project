
///methods just user NO authenticaded can access

import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { redirect } from "next/dist/server/api-utils";
import { parseCookies } from "nookies";


//function just access the no authenticaded (visitante)
export function canSSRGust<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        //get the cookies 
        const cookies = parseCookies(ctx);


        //if the user try access the page with a login saved ready, request
        if (cookies['@pizzafast.token']) {
            //request from pages only user authorized ( logados)
            return {
                redirect: {
                    destination: '/dashboard',
                    permanent: false,
                }
            }
        }

        return await fn(ctx);
    }
}