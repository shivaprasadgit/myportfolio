import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";

import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_PYTHONANYWHERE from "../../assets/img/skills/pythonanywhere.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                      <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1" target="_blank" rel="noopener noreferrer">
                      <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style m-1"></Image> JavaScript
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                      {/* <Image src={L_SASS} alt="Sass" rounded className="image-style m-1"></Image> Sass */}
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REACT} alt="React" rounded className="image-style m-1"></Image> React
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REDUX} alt="Redux" rounded className="image-style m-1"></Image> Redux
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REACT_ROUTER} alt="React Router" rounded className="image-style m-1"></Image> React-Router
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_REACT_BOOTSTRAP} alt="React Bootstrap" rounded className="image-style m-1"></Image> React-Bootstrap
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style m-1"></Image> Node.js
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_EXPRESS} alt="Express" rounded className="image-style m-1"></Image> Express
                    </a>
                  </span>

               
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_HEROKU} alt="Heroku" rounded className="image-style m-1"></Image> Heroku
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_DIGITAL_OCEAN} alt="Digital Ocean" rounded className="image-style m-1"></Image> Digital-Ocean
                    </a>
                  </span>

                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_GITHUB_PAGES} alt="GitHub Pages" rounded className="image-style m-1"></Image> GitHub-Pages
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                      <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAz1BMVEX///8lLz7/mQD/lwD/kwD/lQD/kgAAFywNHTAfKjrb3N4iLDwaJjcAFCoGGS2sr7MTITMADifIys3w8fK1t7tyd387Q1Cgo6jBw8b6+vsACiXZ2twAACL29vcpM0Lo6epYXmj/9+u6vMCKjpRKUVxiaHH/nBt7gIeXm6CUl504QE2nqq//0J7/8eD/+vL/1Kb/4L7/pjP/qj9pb3f/smH/ypD/5sn/7Nb/0aAAABxPVWBeZG7/v3X/r0//xIX/u2r/slj/w37/27H/pSj/rkcPWhMOAAAU5ElEQVR4nO1d6ULiSBAWEkJCDgLILTeCopwO6Hqh4Ps/0ybh6q4+gyKOw/dndodcXV1VXfVVdc/Z2QlfhGKmXEjmu93s3eXlZbaVTxYSmWN/U3hk0jetbL2d6/Wqucenbv7LBlErtOo93XZ01/JhWJar607KzWVvyl/zhu9AptnNObY3BsMwfRiG5Q1Cz11ep4uffXCv5LiGGSHhvSMV6abZN9eSW5ynpearmG5u7mhKfnmtsH0JZ8aST7ZjGZRBmIYbjz/d1KTeRXl7vn3hWDTp7N5g2Ua+Qr+9/J++hWP/1xW/8OrC09XtHRdX4jsy7Yv47i3/0e/IXMcdizcKQy/lkuFtrnLejrs0uRNS0o089QktF7vOpl+FoHmBP7l0LvzKR+wdZpV2TV7XxaMwdL3FmGoGMq2IIyOf1Zc5OZqKX+Miijiil+bAG+kjRpG28Rt6lEt6juQwdJPjNCAyXdvl2heEkaKoSCGOXxQv8N+aKMHHpkTLQRa3HytLXNFNSc90xLxoykqoecG1XCps8utqQL8pA8BwQ9iDK7LNFH69ngS/Z3ISNobIyJF02+kL8cNI6JfEg9r4BIrs5o6YGOtO8KW4nUV0MMJaNeRc6xIrBP1TpeC04IPywBmlErzXFnuEbZtV/sJ/hb/AyEEJyRvZChY5z1S0wz54jRJU8wScZHgBPiCbfCRfqGd1/EtdXAcqRuiBGHU5EeVCeWpUBNCSwRLFn6NzitvgC7UC7gACfWRagx9dU3/4jIhMw886dMeP7FxWNGm0wZNAZMS3myxlRHwPn8aXTBO3syvaYm+4up3Sq9VqxEsN/JwKzxv2FZEXouvVx1b+5rxZaJ4n862nnhunzhBc1qE7tXl2Q7oiYtQAIPByMWcI11N/II7Vbp2na5mKh0ym5mXmrXrV0Xdj2UdEpuWkctcFaEG1dEunhJYGCN2KILfTb9hvpQzJA3cVBk7TxiK/SziJht0+pyUZifM7ezPjoUVkuKlqt8DKXZptEBr6XwnUCBiPwXFGBWoQ7HCCuQwwYwv9ESpwxO1xYud0N677o5Zd0VYiMt1U+5q/oNw40DbgK5r4uE2D/TDgtzYDIyKJHUD0bmF58hNQIkcQt1byVdsyUhw1R/Ho6a8Rr7b48vFRJhy3jRtGBUShcXZGARO0tVA5zggI1UE1uAY03BVIyEOx0G1LsBEB8v/FU/WmFFuTgNYBV2kYuTAzigolKgoeyOYogH+/QL84iXs2MyIzmhBIp6VpgRswWzBlAHkX2xmlSccWIM70IDV8eown9EeQIfBc2sFB5GG4dME4IinWc9AFHH2ke826A/g5ByOXcA9gmp/jXj+HcyADGPoAa7BZzghxrwa6DrKX4S6uKFhoX8F5Fd5KengUQSjvAKYQhHc6yxkhdqY3HxE9YupdFY+Lsci+jHs2VzKBPxDAZELDAB/Lmk/0sngNzeBZelfDFQWXPfBsvJD1G1DgeU2S4nDpXgFx62YVGyFL74CF49FG4UeJKAPMHgYyQMsYSoGsQJ6ioXEzi1bDnwsyaKBFRza0M5AGwAgETCg9MkJ1zZ9yJI5k0QO4dgL7BukHVO3vBogOLRDrVQAzWKc9o4aQ0L6eoYEznVar4bQ1KAQAMs+0wtV/vhrQX8PcHE+5TZP2tQidZkYqeMxDp9Xw8BnS4kWQ+BzZGYFUiaAeQS5g08JlJBKyfKNAI046rYaHzxZMriD5pB9VjQCJ70C7qOEzSnWdCEW1+h11RrRMFiyURJoCVJskRL8VIA2LE64Dz1GMR/IRKJ220jJ0iDRaDTgbIr5swvzaau/b2fAFSIpEBEo5FNeJDsgOFjA06qHloPi8kLYImX+/j0XcIXAonItEVMaXfYozQtzZWsnQBYtGq11imkkRIlksMO3HY7VDCUV0FsFDGNIZIZ5nIw/E19CcEZ7JuySpVKbwT4ZdF7QVHAhiEbV4gbCHDGJVG8eLagFJq+GKadUpnwWZ2dW745aAbD4IxCICse4FDJfRdOFi7alQD0fSannsndTICZaC1zDdeO/q66VUrDVvWpf1x3b7sf50l71OFmqIyxWLqIJbGuGMEMJkGwMmUGdE0GpPuCuiLlYtVlOIL6XWJxscMZSv6mbKCdooA/jNoPGU2767LqyEIRYRiPOIEdeRwHHrmhHNIpMWLPughRE+euySvhmUv/aWCYp0V7fp9WnDch071W6d1yREhBMXxJAQk9itTahYS+AG3Bez6JKazWtOMK24fdf8ZFNxMWnS69LIaF0HFmVpIsrgy34Kj4zQAe/SlzyHVsMjLWb7SJorIw+W49T3aAPd4qZKVBJlQBMRYAOA+0WEgTQrljm0GvY4gqHaoSCSUVDnvwvR4oii1o7v10NDFRG+AoFYEDEpJEwuIgoMaLUK72kYyq5EO5ll91h90TwkL/bsw6KLCO/0xJ1REeHp0eUb4fgBT4cHEcyiio8MpfGAhKk7zFoUC1lGbXRfEUGOELV/dHlHGegrJq2GVVVMlz+UvC6hSN7kGOGqkfVQfaYyIsJJJawPCaXTeki0guoKHhyiNSSSKoKoZW0ZIZn2XQhra1ObND4lIpxvx9wHSqehPieDOqMs4wdeRXuLxJ0tMyK3Ks2XXDKe5zfzubrrwbKo+2Y4IsKLANgiBJj9HR4ZtBpeMGBUnXDUWrpEs73hSFIBLVovlOW9IneZbV3nb27yrezlY89JOS5tbw5DRDg5gRDcKJ2Gk/Soy4kjE4wZrag1e4t0q5cS7WkxdansjWjv8kek15Nl3FKLlUQhn21bti4ROp5BGhBxRsgPpoVpBKotKCOEdSKF6fkoX+cEO3+Mqow/Itu5DbvLNNJM+QZnt1giwh0I4oxQOg2vZmds6g14UySFKuIhkW87cFKxx0k0SOQJM3PqfC8G2rAYIsIjYiSKJpj9HRDSG/FeWIVctn8TQS35VGLvsksJtbKoE615oqBKUkQ425zaTH6GYPZ3QKm4nbZgBB2/d52FSjNrMdJP8QavPIyI4sJyuKSI8P0L28ZEjE4DtzQpbCRomkntW9coFu5cQh2CLxMJHe7/kOiylRQR/uitb0GWLYKxRftjtiQT1jTzqfJYLU9L1DlZcYAy2OBlwgo97R48C2KKCEsbth+CuCiSXEQUZpvXYUvjZ1s+khYZAwr2CYKSF7upDAGoNTBFhF9XWssemRMyTu5SaDWszirYaSRGsQuUgs8cnBFdHlJLalpSi86wlr+1M0LlRr4MJTQ3CT2aEIt9qxjnkArgWxrg4eXaKCWI2RWw+V9nnwidRvk01M2tFRpzRYIJlwPsiybafzDAXXMydgaNky0iPKBZOVqETqONF0kF15kGNiESKawE4C5OLgEF+8OlPgE0YbBFVMSZMH+5Ruk0WiqBfL1pBn+D5nr4xpi9Abq5+DkN6GDg7x/bICeVgPh4IpIrlE6jVcPQeDNwzVjTjJAqkgTwwNx+LbgNXCYwK4Ld9Q5b87AZCMaHmA3VSyYgrYbVWEUb/2VxJdkb7gPG1qnwCxovJcAS0CBNy1KZ/R1QQwwuQKVsGl/Uegb6ormnA8CwSEaLYD8YT02xANsvmSE5rE5t/7kEtBraOCm7v04I2ILM1SIgIq5vXyEDkzpewItNgScTtKWRPh15QKuhUQldqHsA9vrzngt9kSM2dmIzIi9WwTyJ54xQOo0eBZbxYjaW7MS/6hwuGNnx1vEmEJHwzA5yzx6fKcVCYxOVL2O7OVpw9ISPKtUeVBEDMGzhuRfY2mUJu97J7ZrcpADTOTuToxcZUaCbsHJYX9XX9VLje5L4pwkQG8FFif4dpVhS4rwBI8bdPCovRjiF8gMWStVGSl/VAlsItRuC6OjmW1qWVizhmjI2B1VURIwbUFfqYlsfBbyOPHIhIkdy/z9/88QltWjLjXlZp9owE2YYme7kxaOK0vU76W69LlzG+dpJnLLEiT0SPXpJEpR6cMB9ohuw1fWRUa/g7Gc/qziW5ZbqUkluF3yRqDBHHpCjMza4F6/irFoL3PuJIkMwWKIB04844G8rX7k8w+7lRf6qRrQvpESCJedMf6K47MpNld0ZwSWUGYcjsQ2aflAGnyraODBTt+u8Ixsz10T/kZgNb5LtOJYF/FftPGujxQPCvVA3C60BA3jhh2XoDUK8d6A+3j+ysZssU2y/UshSuiFK4oSiStYETD2VbSZqmWIlUysnu9UU3rHjEHsJqK3ia5Cxpg+e76Ud2iMIXvCMwrB0u1TNtvLn6UStlqnVEon0TSuXoh2HqUvwK01q85XlOK5R9abE1mEd0+miTcEr8NZ96oh5N1CdUaiznwKZ+kdUxeP+Obm6Y3t/Ug1erujEPkmNeriW787T0Afz3kQfMSdEJfZN+eBTRazTNUQwiS2ZVNRC9cmujnOEhZPIBXvIhDwjgsmDZ2oEcLlUEa27RQYXklx4kxWsUVBaVQcT8CTI/9giKlK8Hb+SQTFNAVXECi34MC+kWcy87AvM7TGFwGNzW1Aox8rxSRfKDaJuB/ZhfGwYbgietyWnp5ax1csM1kHg1HlmAI+ejfg5P+9zKKcZlgTpdSLEybJruNVQG/quSmJ/ZKbQmPJ8p3nGBT/3LZJ7Mhn7XNaARRx+VLFCOUJt+2DCKGVDbi0qWAJNNZ0qXm3apjpOTrQqEGuaI2B+iJDflujey7u8bjQwmngufNEyc8dTVVOPEJpSDwZuSLTBZ2xwPoToFK/0BTiaRYoHKSZzckdSG051P3au/Mjq6LbivRvS2RTrtmHY1LPBIRI5x3Y2sHWh2p3deCHrFvE4LWukj+G6x+1sjAT793J7dbqtXpC9gA2mXoxq21mGUibrj7Ivq6ULG5RlorVK+Xz7jxAQ53Bykbi5THkpAf24P0tPmdef3HadbtXdUtwJ+tG9uL3Uu8v/Rf+uxQZeYvnoDWO3M9PwT8yNlyJ3e//LDThq6fNk/urqKlkoH/f8ls/BG8ZVN9jg62/xvWvdyP2zGyeccMIJJ5xwwgknnHDCCSeccMIJJ5xwwgmh0Z+Nbt/nfwLMn1+Ho/vBsT/p56A/ev2IapqqqrFYTPHh/amqmhZbvi8ax/66o6M//BP1RKMoURoUT1Lj239Zmxq3E188VOnsxKQqt8f+0GNh9KKpAvGshaRNV3cM/imrG0yjmpR8Ahl1gnveVfXj/sjf/X2YxuQUaA3VV5+Z5lvd/N/QpFFHDSEfX0Qz765FcFMsNj325x8ejRd5E9uIaOHft1Y8NTo89hAOjHs1FlJAaxGdjdYyUtTO6NijOCQGWAi0jhODUFENYkeFFiKtRHR2vwkQFHUyO/I4DoiRthKNJxR/ze+MP96eX6e3w+FwsRgOp/OXcZQMldS11vSjGw1UtJdfu7g1ol6mEet8vN8u7vsNWuA8uJ92wHqnbnRmMNk6ekV7+7VCur8Xr9ujKCYjrb/95Y+2/duY+nuFJIEG7rIQob7uZPSPC+kWWfeUDmqQQ9QKY9pbn/mMX44+El0qH9hPM1zDtJdfvLrx0EC8UewZ/DbGQitFHf/qOImFQWcnIpUIp//gGYyiLh/+PVZpgGiRRvrkW5DEKGr09d9IcHdooOOn/D5TQB6jeJ77V9vbbDHDlQBx18oL7Q4kikRU6faXqlJj6ofcGsa/jnYCYNEfryTnpKjK/BdGSrM/a34NkxESF2msRZ0wtkCg2i8rCAwexto2NY0iQ5vvRq+y76ZST4qq/fk1Xmk2V1Fj0RBHslvQYnPOE4YxKvsU8xa4XxB196dRnF1Dtaixc0UqVyMaH3SSV4mpk+Ff7bsHiw+CFlLfd7+j3lrgWW5ZlQJFVV/+WimN3igVEBXNxN63+qW8iZ7Wn2jwWTspaR9/oZRGc1qFSNHe0It2rkiT8LwPHD7c06W/yuIaC2+Fpw1HiS3Q6+63eoEtc0z0X3h1OUWNTYZ/hffuDz8UxnSrY3wEu6go9s54GsCCFiNhujR+/+Gkyex1rLL96iu4+mVnZ7KzP5gLynNeEhd7+6nK1FjMFY3dAaIuYc6wW/IBm8bFbCysgnvK1Hkf/TDPNJi9LrkdMopKpmDDrYiYyQcVD3xrWyuTqoynox+Sowxm04nCbyBS1A+K6n9sblHG4d7YEFnbVkyxyfG1aXb7EtVY7WcbqNEF5dbGVhf4kTX1tUvJjgFPTFrneXEkXqAxm77FhOLxk3Lopld42NhZWCUKMIxKN+b4jYLq8n34rZ2njfuHeVTcnRd8n/bG0PTl5m51r2V6MJVwSbicouPn4ezgcho0Rrd/lpLiCcoWrPFvCcfY277f8hyy/UTxzU7tvL0fyvAas+HzS2fV1yH5SXQntMJ0Mzx1/yCm8ayF79EJBKV1Xp6nI4miuuSH3I+mzxNFY7cFMwTEbYLd5GeUaCDMt833aGRaC8p3UbHlfPow6tNbM8Rv79+PbqfzsaKG0ZydgKLcLuHZOj9bN4Huj/4znW+T/c6VpKKdztjTq+Fidt8Y+KC+K/ilfz8bLYav849xx1uKAtns9WJPQPx52VCy6ufdQuNZ0jNyv1hZ65UWNEF3luPJ5OPl5eVtBe+/JuNlx1+fgx0Iqzay/d8q0iB/PjYS+pK2z0bI3lzhADDE0P/5mudrEp2c6+QjRi2e7YOHTuj202Mhpn2wV7EdxsF48H6ZT2L09gX2dnB4qZpcDfA+UCIl9rWkRf9VPuQ+DjwXNJUMNJ4DVxQuwZfCYsLhY44MRdLCAgQ9x4oMXx0e/fcQ+06+D558lrIK5MPfxaCEz+9lMXr52gXu84ip0edw0c17zJPqITnmxgObIP52ePP1JzS5t9DU5aHp5f7t+Ce4JUXV3vYiP/vfwnH1byeS+wUPJJ6YGvsj7aCPhf7Di4A0Ppx8tM78p5DnAgxGz51vdky++iynf9f++v7Dm79f5zvk5LNR0eMXFfbC/e1bVDuo0flknfoDai6fwv1wvgzJDMpLR4t+/JjK3efQGE0/vFhlTyaMJh5Pd5Tl87D/K8SzRX80fV5q2h50KqY5/okesY/XxS+TDgJPUPNJcJBJGBJRCXyOpkUn81fYSP5LMbgfDV/nL5NlQEUHx77EFALrrb3eutiZvL0PF4cvyP1EDBr92WJ4e/v6PH/7mIyXy84ay+XE39x76wmm39ivWHLC9+F/8WW//HTAV+EAAAAASUVORK5CYII=" alt="pythonanywhere" rounded className="image-style m-1"></Image> AWS
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                      <Image src="data:image/png;base64,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
" rounded className="image-style m-1"></Image> Netlify
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style m-1"></Image> JavaScript
                    </a>
                  </span>

                
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                      <Image src="https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg" alt="PostgreSQL" rounded className="image-style m-1"></Image> MongoDB
                    </a>
                  </span>
                 
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={L_GIT} alt="GIT" rounded className="image-style m-1"></Image> GIT
                    </a>
                  </span>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                      <Image src="data:image/jpeg;base64,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" alt="GIT" rounded className="image-style m-1"></Image> Bit Bucket
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
