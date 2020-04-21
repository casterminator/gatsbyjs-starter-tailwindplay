import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
    
      <SEO
        title="Learnovate"
        keywords={[`learn`, `innovate`, `react`, `Learnovate`]}
      />

    </Layout>
  );
}

export default IndexPage;
