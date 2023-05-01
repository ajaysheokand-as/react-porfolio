import React from 'react';
import "./Skill.css";

export const Skill = () => {
  return (
    
    <div class="container-skills">
					<div class="html">
					<p class="bar-title">
						HTML / HTML5
						<span class="percent align-right">95%</span>
					</p>
					<div class="bar">
						<div class="bar-fill bar-fill-html start"></div>
					</div>
					</div>
					<div class="javascript">
						<p class="bar-title">
							Javascript
							<span class="percent align-right">60%</span>
						</p>
						<div class="bar">
							<div class="bar-fill bar-fill-javascript start"></div>
						</div>
					</div>
					<div class="reactjs">
						<p class="bar-title">
							ReactJs
							<span class="percent align-right">80%</span>
						</p>
						<div class="bar">
							<div class="bar-fill bar-fill-reactjs start"></div>
						</div>
					</div>
					<div class="css-sass">
						<p class="bar-title">
							CSS / SASS
							<span class="percent align-right">80%</span>
						</p>
						<div class="bar">
							<div class="bar-fill bar-fill-css-sass start"></div>
						</div>
					</div>
					<div class="nodejs">
						<p class="bar-title">
							NodeJS
							<span class="percent align-right">50%</span>
						</p>
						<div class="bar">
						<div class="bar-fill bar-fill-nodejs start"></div>
						</div>
					</div>
                    <div class="nodejs">
						<p class="bar-title">
							MongoDB
							<span class="percent align-right">50%</span>
						</p>
						<div class="bar">
						<div class="bar-fill bar-fill-nodejs start"></div>
						</div>
					</div>
				</div>
  )
}
