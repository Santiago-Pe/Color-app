/* ---------- Dependeces ---------- */
import React from "react";

/* ---------- Styles ---------- */
import '../../App.css';

/* ---------- Component ---------- */

function Page ({children}) {

    return(<section className="page">{children}</section>)
}

export default Page;