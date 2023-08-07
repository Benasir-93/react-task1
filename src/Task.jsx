import React from 'react'
import './Task.css'

function Task() {
  return React.createElement('div',{className:'pricing'},
  React.createElement('div',{className:'card'},
  React.createElement('h5',null,'Free !'),
  React.createElement('h2',null,'$0',
  React.createElement('span',null,'/month')),
  //hr
  React.createElement('hr'),
// ul
  React.createElement('ul',{className:'fa-list'},
  React.createElement('li',null,'Single User'),
  React.createElement('li',null,'50GB Storage'),
  React.createElement('li',null,'Limited Public Projects'),
  React.createElement('li',null,'Community Access'),
  React.createElement('li',{className:"fade"},'Unlimited Private Projects'),
  React.createElement('li',{className:"fade"},'Dedicated Phone Support'),
  React.createElement('li',{className:"fade"},'Free Subdomain'),
  React.createElement('li',{className:"fade"},'Monthly Status Report')),

  //button
  React.createElement('button',null,'buy now')
  ),
  
  //second div

  React.createElement('div',{className:'card'},
  React.createElement('h5',null,'Free !'),
  React.createElement('h2',null,'$9',
  React.createElement('span',null,'/month')),
  //hr
  React.createElement('hr'),
// ul
  React.createElement('ul',{className:'fa-list'},
  React.createElement('li',null,'5 User'),
  React.createElement('li',null,'50GB Storage'),
  React.createElement('li',null,'Unlimited Public Projects'),
  React.createElement('li',null,'Community Access'),
  React.createElement('li',null,'Unlimted Private Projects'),
  React.createElement('li',null,'Dedicated Phone Support'),
  React.createElement('li',null,'Free Subdomain'),
  React.createElement('li',{className:"fade"},'Monthly status Records')),

  //button
  React.createElement('button',null,'buy now')
  ),
  
  //third div
  React.createElement('div',{className:'card'},
  React.createElement('h5',null,'Free !'),
  React.createElement('h2',null,'$49',
  React.createElement('span',null,'/month')),
  //hr
  React.createElement('hr'),
// ul
  React.createElement('ul',{className:'fa-list'},
  React.createElement('li',null,'Unlimited Users'),
  React.createElement('li',null,'50GB Storage'),
  React.createElement('li',null,'Unlimited Public Projects'),
  React.createElement('li',null,'Community Access'),
  React.createElement('li',null,'Unlimted Private Projects'),
  React.createElement('li',null,'Dedicated Phone Support'),
  React.createElement('li',null,'Free Subdomain'),
  React.createElement('li',null,'Monthly status Records')),

  //button
  React.createElement('button',null,'buy now')
  ),
  )
}

export default Task 