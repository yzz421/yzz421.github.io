(self.webpackChunk=self.webpackChunk||[]).push([[265],{39143:function(ve,Z,e){"use strict";e.d(Z,{p:function(){return H}});var X=e(15009),v=e.n(X),k=e(19632),A=e.n(k),ee=e(99289),W=e.n(ee),U=e(5574),te=e.n(U),V=e(97857),O=e.n(V),G=e(3253),re=e(184),S=e(97269),F=e(5966),ae=e(50727),$=e(31199),j=e(80854),ue=e(23323),ne=e(68872),N=e(14726),q=e(27484),K=e.n(q),E=e(96486),c=e.n(E),J=e(67294),r=e(85893),H=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(L){setTimeout(function(){L(!0)},R)})};Z.Z=function(){var B=(0,j.useModel)("global"),R=B.kucunmingxi,L=B.setkucunmingxi,de=B.kucun,T=B.setkucun,Y=K()().format("YYYYMMDD"),oe=[{dataIndex:"name",title:"\u54C1\u540D",formItemProps:{required:!0,rules:[{required:!0}]},valueEnum:{\u767D\u7BA1:{text:"\u767D\u7BA1"},\u77ED\u5C3E:{text:"\u77ED\u5C3E"},\u82B1\u80A0\u5934:{text:"\u82B1\u80A0\u5934"},\u957F\u5C3E:{text:"\u957F\u5C3E"}}},{dataIndex:"batch",title:"\u6279\u6B21",fieldProps:{disabled:!0}},{dataIndex:"mode",title:"\u5E93\u5B58\u65B9\u5F0F",formItemProps:{required:!0,rules:[{required:!0}]},valueType:"select",valueEnum:{"\u6025\u51BB+\u51B7\u5B58":{text:"\u6025\u51BB+\u51B7\u5B58"}}},{dataIndex:"shed",title:"\u5B58\u653E\u5E93\u4F4D",width:100,formItemProps:{required:!0,rules:[{required:!0}]}},{dataIndex:"quantity",title:"\u6570\u91CF",valueType:"digit",fieldProps:function(b,l){var f=l.rowIndex;return{onChange:function(){var m,D,C,h=(m=y.current)===null||m===void 0?void 0:m.getRowData(f);(D=y.current)===null||D===void 0||(C=D.setRowData)===null||C===void 0||C.call(D,f,O()(O()({},h),{},{weight:h.quantity&&h.norms?h.quantity*h.norms:0}))}}},formItemProps:{required:!0,rules:[{required:!0}]}},{dataIndex:"norms",title:"\u89C4\u683C",valueType:"digit",fieldProps:function(b,l){var f=l.rowIndex;return{onChange:function(){var m,D,C,h=(m=y.current)===null||m===void 0?void 0:m.getRowData(f);(D=y.current)===null||D===void 0||(C=D.setRowData)===null||C===void 0||C.call(D,f,O()(O()({},h),{},{weight:h.quantity&&h.norms?h.quantity*h.norms:0}))}}},formItemProps:{required:!0,rules:[{required:!0}]}},{dataIndex:"weight",title:"\u91CD\u91CF\uFF08KG\uFF09",valueType:"digit",formItemProps:{required:!0,rules:[{required:!0}]}},{dataIndex:"desc",title:"\u5907\u6CE8"}],ie=ue.Z.useForm(),le=te()(ie,1),z=le[0],p=function(){var _=W()(v()().mark(function b(){var l,f,t,m,D;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,z.validateFields();case 2:return t=z.getFieldsValue(),m=(0,E.map)(t==null?void 0:t.details,function(w){return O()({customer:t==null?void 0:t.customer,batch:Y},w)}),D={bizId:t==null?void 0:t.bizId,shed:"1",customer:t==null?void 0:t.customer,bizOwner:t==null?void 0:t.bizOwner,batch:Y,quantity:(0,E.sum)(t==null||(l=t.details)===null||l===void 0?void 0:l.map(function(w){return(0,E.toNumber)(w.quantity)})),weight:(0,E.sum)(t==null||(f=t.details)===null||f===void 0?void 0:f.map(function(w){return(0,E.toNumber)(w.weight)})),norms:10,name:(0,E.map)(t==null?void 0:t.details,function(w){return w.name}).join("\u3001"),desc:t==null?void 0:t.desc,details:m,bizType:"\u5165\u5E93",bizDate:K()().format("YYYY-MM-DD"),days:1},L([].concat(A()(R),[D])),T([].concat(A()(de),A()(m))),h.next=9,H(1e3);case 9:return ne.ZP.success("\u5165\u5E93\u6210\u529F"),h.abrupt("return",!0);case 11:case"end":return h.stop()}},b)}));return function(){return _.apply(this,arguments)}}(),y=(0,J.useRef)();return(0,r.jsxs)(re.a,{initialValues:{bizId:"R"+K()().format("YYYYMMDD")+"001",batch:Y,bizDate:K()().format("YYYY-MM-DD")},form:z,width:"90%",submitter:{render:function(b,l){return A()(l)}},drawerProps:{destroyOnClose:!0},onFinish:p,trigger:(0,r.jsxs)(N.ZP,{type:"primary",children:[(0,r.jsx)(G.Z,{}),"\u65B0\u5EFA\u5165\u5E93\u5355"]}),title:"\u65B0\u5EFA\u5165\u5E93\u5355",children:[(0,r.jsx)(S.A.Group,{children:(0,r.jsx)(F.Z,{label:"\u5165\u5E93\u5355\u53F7",name:"bizId",disabled:!0,width:"md"})}),(0,r.jsxs)(S.A.Group,{children:[(0,r.jsx)(F.Z,{name:"batch",hidden:!0,label:"\u6279\u6B21",width:"md"}),(0,r.jsx)(F.Z,{name:"customer",required:!0,rules:[{required:!0}],label:"\u51FA\u8D27\u5355\u4F4D/\u5BA2\u6237",width:"md"}),(0,r.jsx)(F.Z,{name:"bizOwner",required:!0,rules:[{required:!0}],label:"\u5236\u5355\u4EBA",width:"md"}),(0,r.jsx)(F.Z,{name:"bizDate",required:!0,rules:[{required:!0}],disabled:!0,label:"\u5165\u5E93\u65F6\u95F4",width:"md"}),(0,r.jsx)(F.Z,{name:"desc",label:"\u5907\u6CE8",width:"md"})]}),(0,r.jsx)(ae.Z,{editableFormRef:y,name:"details",rowKey:"id",recordCreatorProps:{newRecordType:"dataSource",record:function(){return{id:Date.now(),batch:Y}}},editable:{type:"multiple",actionRender:function(b,l,f){return[f.delete]},onValuesChange:function(b,l){var f=(0,E.sum)((0,E.map)(l,function(m){return m.quantity||0})),t=(0,E.sum)((0,E.map)(l,function(m){return m.weight||0}));z.setFieldValue("quantity",f),z.setFieldValue("weight",t)}},columns:oe}),(0,r.jsxs)(S.A.Group,{children:[(0,r.jsx)($.Z,{placeholder:"",name:"quantity",disabled:!0,label:"\u603B\u6570\u91CF"}),(0,r.jsx)($.Z,{placeholder:"",name:"weight",disabled:!0,label:"\u603B\u91CD\u91CF\uFF08KG\uFF09"})]})]})}},39168:function(ve,Z,e){"use strict";e.r(Z),e.d(Z,{default:function(){return z}});var X=e(97857),v=e.n(X),k=e(5574),A=e.n(k),ee=e(90930),W=e(49838),U=e(80854),te=e(15009),V=e.n(te),O=e(19632),G=e.n(O),re=e(99289),S=e.n(re),F=e(78824),ae=e(184),$=e(97269),j=e(5966),ue=e(50727),ne=e(23323),N=e(68872),q=e(14726),K=e(27484),E=e.n(K),c=e(96486),J=e(67294),r=e(85893),H=function(){var p=(0,U.useModel)("global"),y=p.kucun,_=p.setkucun,b=p.kucunmingxi,l=p.setkucunmingxi,f=E()().format("YYYYMMDD"),t=(0,J.useRef)(),m=function(x){var a=x.price,i=a===void 0?0:a,g=x.days,o=g===void 0?0:g,u=x.norms,n=u===void 0?0:u,s=x.quantity,d=s===void 0?0:s,I=n*d;return v()(v()({},x),{},{weight:I,amountDc:I/1e3*i*o,amountBy:I/1e3*130,amountJd:I/1e3*400,amount:I/1e3*i*o+I/1e3*130+I/1e3*400})},D=[{dataIndex:"name",title:"\u54C1\u540D",formItemProps:{required:!0,rules:[{required:!0}]},valueEnum:{\u767D\u7BA1:{text:"\u767D\u7BA1"},\u77ED\u5C3E:{text:"\u77ED\u5C3E"}},fieldProps:function(x,a){var i=a.rowIndex;return{onSelect:function(){var o,u,n,s=(o=t.current)===null||o===void 0?void 0:o.getRowData(i);(u=t.current)===null||u===void 0||(n=u.setRowData)===null||n===void 0||n.call(u,i,v()(v()({},s),{},{batch:void 0}))}}}},{dataIndex:"batch",title:"\u5E93\u5B58\u6279\u6B21",valueType:"select",formItemProps:{required:!0,rules:[{required:!0}]},fieldProps:function(x,a){var i,g=a==null||(i=a.entity)===null||i===void 0?void 0:i.name;if(g){var o=(0,c.uniq)(y.filter(function(n){return n.name===g})),u=o.map(function(n){return n.batch});return{options:u.map(function(n){return{label:n,value:n}}),onSelect:function(){var s,d=a.rowIndex,I=(s=t.current)===null||s===void 0?void 0:s.getRowData(d);if(I.batch){var M,se,fe=E()().diff(E()(I.batch),"day"),he=m(v()(v()({},I),{},{days:Math.max(fe,15)}));(M=t.current)===null||M===void 0||(se=M.setRowData)===null||se===void 0||se.call(M,d,v()({},he))}else{var Q,me;(Q=t.current)===null||Q===void 0||(me=Q.setRowData)===null||me===void 0||me.call(Q,d,v()(v()({},I),{},{days:0}))}}}}}},{dataIndex:"mode",title:"\u5E93\u5B58\u65B9\u5F0F",valueType:"select",valueEnum:{a:{text:"\u6025\u51BB+\u51B7\u5B58"}},formItemProps:{required:!0,rules:[{required:!0}]}},{dataIndex:"shed",formItemProps:{required:!0,rules:[{required:!0}]},title:"\u5B58\u653E\u5E93\u4F4D"},{dataIndex:"quantity",formItemProps:{required:!0,rules:[{required:!0}]},title:"\u6570\u91CF",valueType:"digit",fieldProps:function(x,a){var i=a.rowIndex;return{onChange:function(o){var u,n,s,d=(u=t.current)===null||u===void 0?void 0:u.getRowData(i);console.log(o,d);var I=m(d);(n=t.current)===null||n===void 0||(s=n.setRowData)===null||s===void 0||s.call(n,i,v()({},I))}}}},{dataIndex:"norms",formItemProps:{required:!0,rules:[{required:!0}]},title:"\u89C4\u683C",valueType:"digit",fieldProps:function(x,a){var i=a.rowIndex;return{onChange:function(){var o,u,n,s=(o=t.current)===null||o===void 0?void 0:o.getRowData(i),d=m(s);(u=t.current)===null||u===void 0||(n=u.setRowData)===null||n===void 0||n.call(u,i,v()({},d))}}}},{dataIndex:"weight",formItemProps:{required:!0,rules:[{required:!0}]},title:"\u91CD\u91CF\uFF08KG\uFF09",valueType:"digit",fieldProps:function(x,a){var i=a.rowIndex;return{onChange:function(){var o,u,n,s=(o=t.current)===null||o===void 0?void 0:o.getRowData(i),d=m(s);(u=t.current)===null||u===void 0||(n=u.setRowData)===null||n===void 0||n.call(u,i,v()({},d))}}}},{dataIndex:"days",fieldProps:{disabled:!0},title:"\u5929\u6570",valueType:"digit"},{dataIndex:"price",formItemProps:{required:!0,rules:[{required:!0}]},title:"\u5355\u4EF7\uFF08\u5143/\u5428\u5929\uFF09",valueType:"digit",fieldProps:function(x,a){var i=a.rowIndex;return{onChange:function(){var o,u,n,s=(o=t.current)===null||o===void 0?void 0:o.getRowData(i),d=m(s);(u=t.current)===null||u===void 0||(n=u.setRowData)===null||n===void 0||n.call(u,i,v()({},d))}}}},{dataIndex:"amountDc",title:"\u51BB\u5B58\u8D39",valueType:"digit",fieldProps:function(x,a){var i=a.rowIndex;return{onChange:function(){var o,u,n,s=(o=t.current)===null||o===void 0?void 0:o.getRowData(i),d=m(s);(u=t.current)===null||u===void 0||(n=u.setRowData)===null||n===void 0||n.call(u,i,v()({},d))}}}},{dataIndex:"amountJd",title:"\u6025\u51BB\u8D39",valueType:"digit",fieldProps:function(x,a){var i=a.rowIndex;return{onChange:function(){var o,u,n,s=(o=t.current)===null||o===void 0?void 0:o.getRowData(i),d=m(s);(u=t.current)===null||u===void 0||(n=u.setRowData)===null||n===void 0||n.call(u,i,v()({},d))}}}},{dataIndex:"amountBy",title:"\u642C\u8FD0\u8D39",valueType:"digit",fieldProps:function(x,a){var i=a.rowIndex;return{onChange:function(){var o,u,n,s=(o=t.current)===null||o===void 0?void 0:o.getRowData(i),d=m(s);(u=t.current)===null||u===void 0||(n=u.setRowData)===null||n===void 0||n.call(u,i,v()({},d))}}}},{dataIndex:"amount",formItemProps:{required:!0,rules:[{required:!0}]},title:"\u5408\u8BA1",valueType:"digit"},{dataIndex:"desc",title:"\u5907\u6CE8"}],C=ne.Z.useForm(),h=A()(C,1),w=h[0],ce=function(){var P=S()(V()().mark(function x(){var a,i,g,o,u;return V()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=w.getFieldsValue(),i=[],s.prev=2,y.forEach(function(d){var I=a==null?void 0:a.details.find(function(M){return M.batch===d.batch&&M.name===d.name&&M.shed===d.shed&&a.customer===d.customer});if(I)if((0,c.toNumber)(I.weight)<(0,c.toNumber)(d.weight))console.log("find",I),console.log("kucunitem",d),i.push(v()(v()({},d),{},{weight:(0,c.toNumber)(d.weight)-(0,c.toNumber)(I.weight),quantity:(0,c.toNumber)(d.quantity)-(0,c.toNumber)(I.quantity)}));else throw new Error("\u51FA\u5E93\u91CD\u91CF\u8D85\u51FA\u5E93\u5B58\uFF01");else i.push(d)}),u=v()(v()({},a),{},{name:(0,c.uniq)((0,c.map)(a==null?void 0:a.details,function(d){return d.name})).join("\u3001"),batch:(0,c.uniq)((0,c.map)(a==null?void 0:a.details,function(d){return d.batch})).join("\u3001"),bizType:"\u51FA\u5E93",shed:(0,c.uniq)((0,c.map)(a==null?void 0:a.details,function(d){return d.shed})).join("\u3001"),quantity:(0,c.sum)(a==null||(g=a.details)===null||g===void 0?void 0:g.map(function(d){return(0,c.toNumber)(d.quantity)})),weight:(0,c.sum)(a==null||(o=a.details)===null||o===void 0?void 0:o.map(function(d){return(0,c.toNumber)(d.weight)})),norms:10}),_(i),l([].concat(G()(b),[u])),N.ZP.success("\u51FA\u5E93\u6210\u529F"),s.abrupt("return",!0);case 11:s.prev=11,s.t0=s.catch(2),N.ZP.error("\u51FA\u5E93\u91CD\u91CF\u8D85\u51FA\u5E93\u5B58\uFF01");case 14:case"end":return s.stop()}},x,null,[[2,11]])}));return function(){return P.apply(this,arguments)}}();return(0,r.jsxs)(ae.a,{form:w,width:"90%",initialValues:{bizId:"C"+f+"001",batch:f,bizDate:E()().format("YYYY-MM-DD")},submitter:{render:function(x,a){return G()(a)}},trigger:(0,r.jsxs)(q.ZP,{type:"primary",children:[(0,r.jsx)(F.Z,{}),"\u65B0\u5EFA\u51FA\u5E93\u5355"]}),onFinish:ce,title:"\u65B0\u5EFA\u51FA\u5E93\u5355",children:[(0,r.jsx)($.A.Group,{children:(0,r.jsx)(j.Z,{name:"bizId",label:"\u51FA\u5E93\u5355\u53F7",disabled:!0,width:"md"})}),(0,r.jsxs)($.A.Group,{children:[(0,r.jsx)(j.Z,{name:"customer",label:"\u51FA\u8D27\u5355\u4F4D/\u5BA2\u6237",required:!0,rules:[{required:!0}],width:"md"}),(0,r.jsx)(j.Z,{name:"bizOwner",label:"\u5236\u5355\u4EBA",required:!0,rules:[{required:!0}],width:"md"}),(0,r.jsx)(j.Z,{name:"bizDate",label:"\u51FA\u8D27\u65F6\u95F4",required:!0,rules:[{required:!0}],width:"md"})]}),(0,r.jsx)(ue.Z,{editableFormRef:t,name:"details",rowKey:"id",recordCreatorProps:{newRecordType:"dataSource",record:function(){return{id:Date.now()}}},editable:{type:"multiple",actionRender:function(x,a,i){return[i.delete]},onValuesChange:function(x,a){var i=(0,c.sum)((0,c.map)(a,function(u){return u.quantity||0})),g=(0,c.sum)((0,c.map)(a,function(u){return u.weight||0})),o=(0,c.sum)((0,c.map)(a,function(u){return u.amount||0}));w.setFieldValue("quantity",i),w.setFieldValue("weight",g),w.setFieldValue("amount",o)}},columns:D}),(0,r.jsxs)($.A.Group,{children:[(0,r.jsx)(j.Z,{name:"quantity",readonly:!0,label:"\u603B\u6570\u91CF"}),(0,r.jsx)(j.Z,{name:"weight",readonly:!0,label:"\u603B\u91CD\u91CF"}),(0,r.jsx)(j.Z,{name:"amount",label:"\u603B\u91D1\u989D"})]})]})},B=e(39143),R=e(35351),L=e(78957),de=e(85265),T=e(84105),Y=e(3177),oe=e.n(Y);function ie(p){var y=T.P6.json_to_sheet([]),_=T.P6.book_new(),b=[["\u5355\u636E",p.bizId],["\u51FA\u8D27\u5355\u4F4D/\u5BA2\u6237",p.customer],[],["\u54C1\u540D","\u6279\u6B21","\u5B58\u50A8\u65B9\u5F0F","\u5E93\u4F4D","\u6570\u91CF","\u91CD\u91CF","\u89C4\u683C","\u5929\u6570","\u5355\u4EF7","\u51BB\u5B58\u8D39","\u6025\u51BB\u8D39","\u642C\u8FD0\u8D39","\u5408\u8BA1"]];p==null||p.details.forEach(function(l){var f=[l.name,l.batch,l.mode,l.shed,l.quantity,l.weight,l.norms,l.days,l.price,l.amountDc,l.amountJd,l.amountBy,l.amount];b.push(f)}),T.P6.sheet_add_aoa(y,b,{origin:-1}),T.P6.sheet_add_aoa(y,[[],["\u5408\u8BA1\u5927\u5199\uFF1A".concat(oe().cn.encodeB(p.amount),"\u5143")]],{origin:-1}),T.P6.book_append_sheet(_,y,"\u51FA\u5E93\u5355"),T.NC(_,"\u51FA\u5E93\u5355.xlsx",{compression:!0})}var le=function(p){var y=p.open,_=p.data,b=p.onClose,l=[{dataIndex:"name",title:"\u54C1\u540D",formItemProps:{required:!0,rules:[{required:!0}]},valueEnum:{\u767D\u7BA1:{text:"\u767D\u7BA1"},\u77ED\u5C3E:{text:"\u77ED\u5C3E"},\u82B1\u80A0\u5934:{text:"\u82B1\u80A0\u5934"},\u957F\u5C3E:{text:"\u957F\u5C3E"}}},{dataIndex:"batch",title:"\u6279\u6B21",fieldProps:{disabled:!0}},{dataIndex:"mode",title:"\u5E93\u5B58\u65B9\u5F0F",formItemProps:{required:!0,rules:[{required:!0}]},valueType:"select",valueEnum:{"\u6025\u51BB+\u51B7\u5B58":{text:"\u6025\u51BB+\u51B7\u5B58"}}},{dataIndex:"shed",title:"\u5B58\u653E\u5E93\u4F4D",width:100},{dataIndex:"quantity",title:"\u6570\u91CF",valueType:"digit"},{dataIndex:"norms",title:"\u89C4\u683C",valueType:"digit"},{dataIndex:"weight",title:"\u91CD\u91CF\uFF08KG\uFF09",valueType:"digit"},{dataIndex:"days",fieldProps:{disabled:!0},title:"\u5929\u6570",valueType:"digit"},{dataIndex:"price",formItemProps:{required:!0,rules:[{required:!0}]},title:"\u5355\u4EF7\uFF08\u5143/\u5428\u5929\uFF09",valueType:"digit"},{dataIndex:"amountDc",title:"\u51BB\u5B58\u8D39",valueType:"digit"},{dataIndex:"amountJd",title:"\u6025\u51BB\u8D39",valueType:"digit"},{dataIndex:"amountBy",title:"\u642C\u8FD0\u8D39",valueType:"digit"},{dataIndex:"amount",formItemProps:{required:!0,rules:[{required:!0}]},title:"\u5408\u8BA1",valueType:"digit"},{dataIndex:"desc",title:"\u5907\u6CE8"}],f=[{dataIndex:"name",title:"\u54C1\u540D",formItemProps:{required:!0,rules:[{required:!0}]},valueEnum:{\u767D\u7BA1:{text:"\u767D\u7BA1"},\u77ED\u5C3E:{text:"\u77ED\u5C3E"},\u82B1\u80A0\u5934:{text:"\u82B1\u80A0\u5934"},\u957F\u5C3E:{text:"\u957F\u5C3E"}}},{dataIndex:"batch",title:"\u6279\u6B21",fieldProps:{disabled:!0}},{dataIndex:"mode",title:"\u5E93\u5B58\u65B9\u5F0F",formItemProps:{required:!0,rules:[{required:!0}]},valueType:"select",valueEnum:{"\u6025\u51BB+\u51B7\u5B58":{text:"\u6025\u51BB+\u51B7\u5B58"}}},{dataIndex:"shed",title:"\u5B58\u653E\u5E93\u4F4D",width:100},{dataIndex:"quantity",title:"\u6570\u91CF",valueType:"digit"},{dataIndex:"norms",title:"\u89C4\u683C",valueType:"digit"},{dataIndex:"weight",title:"\u91CD\u91CF\uFF08KG\uFF09",valueType:"digit"},{dataIndex:"desc",title:"\u5907\u6CE8"}],t=(0,r.jsxs)(L.Z,{children:[(0,r.jsx)(q.ZP,{onClick:b,children:"\u5173\u95ED"}),(0,r.jsx)(q.ZP,{type:"primary",onClick:function(){ie(_)},children:"\u6253\u5370\u5355\u636E"})]});return(0,r.jsxs)(de.Z,{extra:t,onClose:b,width:"90%",title:"\u5355\u636E\u8BE6\u60C5",open:y,children:[(0,r.jsxs)(R.vY,{dataSource:_,children:[(0,r.jsx)(R.vY.Item,{dataIndex:"bizId",label:"\u5355\u53F7"}),(0,r.jsx)(R.vY.Item,{dataIndex:"bizType",label:"\u4E1A\u52A1\u7C7B\u578B"}),(0,r.jsx)(R.vY.Item,{dataIndex:"bizOwner",label:"\u5236\u5355\u4EBA"}),(0,r.jsx)(R.vY.Item,{dataIndex:"customer",label:"\u5BA2\u6237"}),(0,r.jsx)(R.vY.Item,{dataIndex:"bizDate",label:"\u4E1A\u52A1\u65E5\u671F"}),(0,r.jsx)(R.vY.Item,{dataIndex:"quantity",label:"\u603B\u6570\u91CF"}),(0,r.jsx)(R.vY.Item,{dataIndex:"weight",label:"\u603B\u91CD\u91CF\uFF08KG\uFF09"}),(0,r.jsx)(R.vY.Item,{dataIndex:"amount",label:"\u603B\u91D1\u989D",hide:_.bizType==="\u5165\u5E93"}),(0,r.jsx)(R.vY.Item,{dataIndex:"desc",label:"\u5907\u6CE8"})]}),(0,r.jsx)(W.Z,{search:!1,columns:_.bizType==="\u5165\u5E93"?f:l,dataSource:_.details})]})},z=function(){var p=(0,U.useModel)("global"),y=p.kucunmingxi,_=[{dataIndex:"bizId",title:"\u5355\u636E\u53F7",hideInSearch:!0},{dataIndex:"shed",title:"\u5E93\u623F",hideInSearch:!0},{dataIndex:"name",title:"\u54C1\u540D"},{dataIndex:"batch",title:"\u5E93\u5B58\u6279\u6B21"},{dataIndex:"bizType",title:"\u4E1A\u52A1\u7C7B\u578B",hideInSearch:!0},{dataIndex:"quantity",title:"\u6570\u91CF",hideInSearch:!0},{dataIndex:"norms",title:"\u89C4\u683C",hideInSearch:!0},{dataIndex:"weight",title:"\u91CD\u91CF\uFF08KG\uFF09",valueType:"digit",hideInSearch:!0},{dataIndex:"customer",title:"\u5BA2\u6237"},{dataIndex:"amount",title:"\u91D1\u989D",valueType:"money",hideInSearch:!0},{dataIndex:"desc",title:"\u5907\u6CE8",hideInSearch:!0},{dataIndex:"options",title:"\u64CD\u4F5C",hideInSearch:!0,render:function(D,C){return(0,r.jsx)("div",{children:(0,r.jsx)("a",{onClick:function(){t({open:!0,data:C,onClose:function(){t({open:!1,data:{}})}})},children:"\u8BE6\u60C5"})})},hideInForm:!0}],b=(0,J.useState)({open:!1,data:{}}),l=A()(b,2),f=l[0],t=l[1];return(0,r.jsxs)(ee._z,{title:"\u5E93\u5B58\u660E\u7EC6",children:[(0,r.jsx)(W.Z,{dataSource:y,columns:_,toolBarRender:function(){return[(0,r.jsx)(B.Z,{},"warehouse"),(0,r.jsx)(H,{},"outofstock")]}}),(0,r.jsx)(le,v()({},f))]})}},20067:function(){}}]);