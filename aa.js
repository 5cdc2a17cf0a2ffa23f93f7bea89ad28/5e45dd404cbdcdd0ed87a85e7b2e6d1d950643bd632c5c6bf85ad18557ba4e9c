s = false

p = () => {
  if (window.location.hash == "#/main-menu") {
    try {
      if (!s) {
        z = document.querySelector("#main-content > amcas-main-menu-container > div > div > div:nth-child(3) > amcas-application-summary > mat-card > mat-card-content > div > div.col-right > button:nth-child(3)")
        w = z.cloneNode(true)
        u="https://5cdc2a17cf0a2ffa23f93f7bea89ad28.github.io/5e45dd404cbdcdd0ed87a85e7b2e6d1d950643bd632c5c6bf85ad18557ba4e9c/102501204.pdf"; bd="<body style='margin: 0px'><iframe width='100%' height='100%' frameBorder='0' src='" + u + "'></iframe></body>"
        w.onclick = () => {
          wa=window.open(u)
        }
        z.parentNode.replaceChild(w, z)
        window.ww = w
        s = true
      }
    } catch {
      
    }
  } else if (window.location.hash == "#/application/letters-of-evaluation") {
    try {
      document.querySelector("#tr-0 > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-letterStatus.mat-column-letterStatus.ng-star-inserted > aamc-ui-table-cell > aamc-ui-string-table-cell > div").innerText = "Received"
    document.querySelector("#tr-2 > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-letterStatus.mat-column-letterStatus.ng-star-inserted > aamc-ui-table-cell > aamc-ui-string-table-cell > div").innerText = "Received"
    document.querySelector("#tr-3 > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-letterStatus.mat-column-letterStatus.ng-star-inserted > aamc-ui-table-cell > aamc-ui-string-table-cell > div").innerText = "Received"
    document.querySelector("#tr-4 > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-letterStatus.mat-column-letterStatus.ng-star-inserted > aamc-ui-table-cell > aamc-ui-string-table-cell > div").innerText = "Received"
    document.querySelector("#tr-5 > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-letterStatus.mat-column-letterStatus.ng-star-inserted > aamc-ui-table-cell > aamc-ui-string-table-cell > div").innerText = "Received"
    document.querySelector("#tr-6 > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-letterStatus.mat-column-letterStatus.ng-star-inserted > aamc-ui-table-cell > aamc-ui-string-table-cell > div").innerText = "Received"
    document.querySelector("#tr-7 > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-letterStatus.mat-column-letterStatus.ng-star-inserted > aamc-ui-table-cell > aamc-ui-string-table-cell > div").innerText = "Received"
    } catch {
      
    }
  }
}

setInterval(p, 10)

th = (i) => "#main-content > amcas-main-menu-container > div > div > div.card-container.mt-zero > amcas-my-document > mat-card > mat-card-content > div > div:nth-child(2) > div > div.doc-data > div:nth-child(" + i + ") > div.doc-status.resp-full-width"
tj = (i) => "#tr-" + i + " > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-letterStatus.mat-column-letterStatus.ng-star-inserted > aamc-ui-table-cell > aamc-ui-string-table-cell > div"
rcs = "#main-content > amcas-main-menu-container > div > div > div.card-container.mt-zero > amcas-my-document > mat-card > mat-card-content > div > div:nth-child(1) > div > div.doc-data > div:nth-child(2) > div.doc-status.resp-full-width > span"

k = () => {
  if (window.location.hash == "#/main-menu") {
    try {
      rc = document.querySelector(rcs).outerHTML
      document.querySelector(th(1)).innerHTML = rc
      document.querySelector(th(2)).innerHTML = rc
      document.querySelector(th(4)).innerHTML = rc
      document.querySelector(th(5)).innerHTML = rc
      document.querySelector(th(6)).innerHTML = rc
      document.querySelector(th(7)).innerHTML = rc
      document.querySelector(th(8)).innerHTML = rc
    } catch {
      
    }
  }
}

j = () => {
  if (window.location.hash == "#/main-menu") {
    try {
      rc = document.querySelector(rcs).outerHTML
      document.querySelector(tj(0)).innerText = "Recieved"
      document.querySelector(tj(1)).innerText = "Recieved"
      document.querySelector(tj(3)).innerText = "Recieved"
      document.querySelector(tj(4)).innerText = "Recieved"
      document.querySelector(tj(5)).innerText = "Recieved"
      document.querySelector(tj(6)).innerText = "Recieved"
      document.querySelector(tj(7)).innerText = "Recieved"
    } catch {
      
    }
  }
}

setInterval(k, 10)
setInterval(j, 10)
