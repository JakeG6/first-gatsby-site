import React from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout";


const Contact = () => {
    return (
        <Layout>
            <p>contact me at firstsite@gatsby.com</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default Contact