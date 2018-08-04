import React from 'react'


export default props => (
   <aside className="main-sidebar">
      <section className="sidebar">  
         <ul className="sidebar-menu" data-widget="tree">
            <li className="header">
               Menu
            </li>
            <li className="active">
               <a href="#">
                  <i className="fa fa-link"></i>
                  <span>Link</span>
               </a>
            </li>
            {/*<!-- Optionally, you can add icons to the links -->
            <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
            <li className="treeview">
               <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span>
                  <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                  </span>
               </a>
               <ul className="treeview-menu">
                  <li><a href="#">Link in level 2</a></li>
                  <li><a href="#">Link in level 2</a></li>
               </ul>
            </li>*/}
         </ul>
      </section>
   </aside>
)
