body, html {
  margin: 0;
  overflow: hidden;
  -webkit-transition: opacity 400ms;
  -moz-transition: opacity 400ms;
  transition: opacity 400ms;
}

body, .onepage-wrapper, html {
  display: block;
  position: static;
  padding: 0;
  width: 100%;
  height: 100%;
}

.onepage-wrapper {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  padding: 0;
  -webkit-transform-style: preserve-3d;
}

.onepage-wrapper .section {
  width: 100%;
  height: 100%;
}

.onepage-pagination {
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 5;
  list-style: none;
  margin: 0;
  padding: 0;
}
.onepage-pagination li {
  padding: 0;
  text-align: center;
}
.onepage-pagination li a{
  padding: 10px;
  width: 4px;
  height: 4px;
  display: block;
  
}
.onepage-pagination li a:before{
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(0,0,0,0.85);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}

.onepage-pagination li a.active:before{
  width: 10px;
  height: 10px;
  background: none;
  border: 1px solid black;
  margin-top: -4px;
  left: 8px;
}

.disabled-onepage-scroll, .disabled-onepage-scroll .wrapper {
  overflow: auto;
}

.disabled-onepage-scroll .onepage-wrapper .section {
  position: relative !important;
  top: auto !important;
  left: auto !important;
}
.disabled-onepage-scroll .onepage-wrapper {
  -webkit-transform: none !important;
  -moz-transform: none !important;
  transform: none !important;
  -ms-transform: none !important;
  min-height: 100%;
}


.disabled-onepage-scroll .onepage-pagination {
  display: none;
}

body.disabled-onepage-scroll, .disabled-onepage-scroll .onepage-wrapper, html {
  position: inherit;
}