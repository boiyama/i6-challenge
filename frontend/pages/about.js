import Head from "next/head";
import Link from "next/link";
// import * as React from "react";
// import * as $ from "jquery";

export default () => (
  <div>
    <Head>
      <style>body {"{background-color: orange; font-size: 4em;}"}</style>
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
    <span>About</span>
  </div>
);

// export default class extends React.Component<{}, {}> {
//   onClick = () =>
//     $
//       .ajax({
//         type: "POST",
//         url: "http://backend.boiyaa-ssr-gcp.appspot.com/posts",
//         data: {
//           title: "json-server",
//           author: "typicode"
//         },
//         dataType: "json"
//       })
//       .always((_, textStatus) => alert(textStatus));

//   // .then(res => res.json())
//   // .then(posts => this.setState({ posts }));

//   render() {
//     return (
//       <div>
//         <Link href="/">
//           <a>Home</a>
//         </Link>
//         <span>About</span>
//         <button onClick={this.onClick}>test</button>
//       </div>
//     );
//   }
// }
