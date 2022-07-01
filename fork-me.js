class fork_me_wrapper extends HTMLElement {
  constructor() {
    super();

    this.link= this.getAttribute("link");
    this.side = this.getAttribute("side");
    this.message = this.getAttribute("message");
    this.color = this.getAttribute("color");
    
  }

  async connectedCallback() {

    this.initShadowDom();
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.template;
  }

  get style() {
    return `
    
    
    `;
  }


  get template() {
    var Link = this.link
    
     
    var Message = this.message
     if (Link == undefined || Link == ""){
      
       Message = "Error: No Link Found"
    } else{
      
      Message = Message
    }
   
    
     if (Message == undefined || Message == ""){
      
       Message = "Fork Me On GitHub"
    } else{
      
      Message = Message
    }
    
    var Side = this.side
    
     if (Side == undefined || Side == ""){
      
       Side = `  right`
    } else{
      
      Side = Side
    }
    
    
    
    var Color = this.color
     
    if (Color == undefined || Color == ""){
      
       Color = "red"
    } else{
      
      Color = Color
    }
    
    
    var Style = `<style>
   /* Left will inherit from right (so we don't need to duplicate code */
.github-fork-ribbon {
  /* The right and left lasses determine the side we attach our banner to */
  position: absolute;

  /* Add a bit of padding to give some substance outside the "stitching" */
  padding: 2px 0;

  /* Set the base colour */
  background-color: ${Color};

  /* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.00)), to(rgba(0, 0, 0, 0.15)));
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#000000', EndColorStr='#000000');

  /* Add a drop shadow */
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);

  z-index: 9999;
}

.github-fork-ribbon a,
.github-fork-ribbon a:hover {
  /* Set the font */
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: white;

  /* Set the text properties */
  text-decoration: none;
  text-shadow: 0 -1px rgba(0,0,0,0.5);
  text-align: center;

  /* Set the geometry. If you fiddle with these you'll also need to tweak the top and right values in #github-fork-ribbon. */
  width: 200px;
  line-height: 20px;

  /* Set the layout properties */
  display: inline-block;
  padding: 2px 0;

  /* Add "stitching" effect */
  border-width: 1px 0;
  border-style: dotted;
  border-color: rgba(255,255,255,0.7);
}

.github-fork-ribbon-wrapper {
  width: 150px;
  height: 150px;
  position: absolute;
  overflow: hidden;
  top: 0;
  z-index: 9999;
}

.github-fork-ribbon-wrapper.fixed {
  position: fixed;
}

.github-fork-ribbon-wrapper.left {
  left: 0;
}

.github-fork-ribbon-wrapper.right {
  right: 0;
}

.github-fork-ribbon-wrapper.left-bottom {
  position: fixed;
  top: inherit;
  bottom: 0;
  left: 0;
}

.github-fork-ribbon-wrapper.right-bottom {
  position: fixed;
  top: inherit;
  bottom: 0;
  right: 0;
}

.github-fork-ribbon-wrapper.right .github-fork-ribbon {
  top: 42px;
  right: -43px;

  /* Rotate the banner 45 degrees */
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.github-fork-ribbon-wrapper.left .github-fork-ribbon {
  top: 42px;
  left: -43px;

  /* Rotate the banner -45 degrees */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}


.github-fork-ribbon-wrapper.left-bottom .github-fork-ribbon {
  top: 80px;
  left: -43px;

  /* Rotate the banner -45 degrees */
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.github-fork-ribbon-wrapper.right-bottom .github-fork-ribbon {
  top: 80px;
  right: -43px;

  /* Rotate the banner -45 degrees */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}</style>`
    
    if (Side == undefined || Side == ""){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  right`
      
    }
    
     if (Side == "top-right"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  right`
      
    }
       if (Side == "top-left"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  left`
      
    }
    
        if (Side == "bottom-right"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  right-bottom`
      
    }
    
      if (Side == "bottom-left"){
       <!-- TOP RIGHT RIBBON: START COPYING HERE -->
    Side = `  left-bottom`
      
    }
    
    
    
    
      var OpenInNewWindow = this.getAttribute("new-window")
        if (OpenInNewWindow == "True"){
           var TargetBlank = `target="_blank"`
         
       } else {
          var TargetBlank = ``
       }  
    
    
     var Ribbon = ` 
   
   
   <div class="github-fork-ribbon-wrapper ${Side}">
        <div class="github-fork-ribbon">
            <a href="${Link}" ${TargetBlank}>${Message}</a>
        </div>
    </div>`
    
    return `
    ${Style} 
      
          ${Ribbon}
     
    `;
  }
}

window.customElements.define("fork-me", fork_me_wrapper);