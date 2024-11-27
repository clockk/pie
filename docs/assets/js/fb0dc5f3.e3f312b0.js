"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5962],{536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(3159),a=n(15);const s={},d="createSeededRandom",c={id:"@naverpay/utils/src/utils/createSeededRandom",title:"createSeededRandom",description:"\uc120\ud615 \ud569\ub3d9 \uc0dd\uc131\uae30 Linear Congruential Generator, LCG \ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2dc\ub4dc\uac12\uc744 \uae30\ubc18\uc73c\ub85c \ub79c\ub364\uac12\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ud568\uc218 \uc2e4\ud589\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \ub79c\ub364\uac12\uc744 \uc0dd\uc131\ud558\uc9c0\ub9cc, \uc774 \uac12\ub4e4\uc740 seed\uac00 \ub3d9\uc77c\ud558\ub2e4\uba74 \ubaa8\ub450 \ub3d9\uc77c\ud569\ub2c8\ub2e4.",source:"@site/docs/@naverpay/utils/src/utils/createSeededRandom.md",sourceDirName:"@naverpay/utils/src/utils",slug:"/@naverpay/utils/src/utils/createSeededRandom",permalink:"/pie/docs/docs/@naverpay/utils/src/utils/createSeededRandom",draft:!1,unlisted:!1,editUrl:"https://github.com/NaverPayDev/pie/tree/main/packages/@naverpay/utils/src/utils/createSeededRandom.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"createNumberFormatter",permalink:"/pie/docs/docs/@naverpay/utils/src/utils/createNumberFormatter"},next:{title:"createUrlLike",permalink:"/pie/docs/docs/@naverpay/utils/src/utils/createUrlLike"}},o={},i=[{value:"\uc8fc\uc758 \uc0ac\ud56d",id:"\uc8fc\uc758-\uc0ac\ud56d",level:2},{value:"\uc0ac\uc6a9 \uc608\uc81c",id:"\uc0ac\uc6a9-\uc608\uc81c",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"createseededrandom",children:"createSeededRandom"}),"\n",(0,r.jsx)(t.p,{children:"\uc120\ud615 \ud569\ub3d9 \uc0dd\uc131\uae30 Linear Congruential Generator, LCG \ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2dc\ub4dc\uac12\uc744 \uae30\ubc18\uc73c\ub85c \ub79c\ub364\uac12\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ud568\uc218 \uc2e4\ud589\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \ub79c\ub364\uac12\uc744 \uc0dd\uc131\ud558\uc9c0\ub9cc, \uc774 \uac12\ub4e4\uc740 seed\uac00 \ub3d9\uc77c\ud558\ub2e4\uba74 \ubaa8\ub450 \ub3d9\uc77c\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(t.h2,{id:"\uc8fc\uc758-\uc0ac\ud56d",children:"\uc8fc\uc758 \uc0ac\ud56d"}),"\n",(0,r.jsxs)(t.p,{children:["\uc774 seed \ub09c\uc218 \uc0dd\uc131\uae30\ub294 \uc548\uc815\uc131\uc774 \uac80\uc99d\ub41c \uc54c\uace0\ub9ac\uc998\uc774 \uc544\ub2d9\ub2c8\ub2e4. \ub09c\uc218\uac00 \uc911\uc694\ud55c \uacbd\uc6b0\ub77c\uba74 ",(0,r.jsx)(t.a,{href:"/pie/docs/docs/@naverpay/utils/src/utils/getSecureMathRandom",children:(0,r.jsx)(t.code,{children:"getSecureMathRandom"})})," \ub97c \uc0ac\uc6a9\ud574\uc8fc\uc138\uc694."]}),"\n",(0,r.jsx)(t.h2,{id:"\uc0ac\uc6a9-\uc608\uc81c",children:"\uc0ac\uc6a9 \uc608\uc81c"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import {createSeededRandom} from '@naverpay/utils'\n\n// 0\uacfc 1\uc0ac\uc774\uc758 \ub09c\uc218\ncreateSeededRandom()\n\nconst seed = new Date().getTime()\n// random1\uacfc random2\ub294 \uc2dc\ub4dc\uac12\uc774 \ub3d9\uc77c\ud558\uae30 \ub54c\ubb38\uc5d0 \uac19\uc740 \uac12\nconst random1 = createSeededRandom(seed)\nconst random2 = createSeededRandom(seed)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},15:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(1855);const a={},s=r.createContext(a);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);