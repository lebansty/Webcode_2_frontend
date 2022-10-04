
import { useFormik } from 'formik'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Home from './Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'



function Nav() {
  
  let navigate =useNavigate();
  let formik = useFormik({
    initialValues:{
      search:''
    },
    validate:()=>{
      let errors={}

      return errors
    },
    onSubmit: async (values)=>{
window.localStorage.setItem('search-word',values.search);
navigate('/home/searchques')
window.location.reload()

    }
  })
  return (
    <>
 
 <nav className="navbar  navbar-expand-lg modify">
    <div className="container-fluid ">
    <div className='iconsBrand'><FontAwesomeIcon style={{fontSize:'35px'}} icon={faStackOverflow} /> <Link className="navbar-brand" to={'/home'}>stack <b>overflow</b></Link></div>
      
      <form className="d-flex searchB" onSubmit={formik.handleSubmit} role="search">
        <input className="form-control searchInput me-2" name='search' value={formik.values.search} onChange={formik.handleChange}  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btntag" type="submit">Search</button>
      </form>
      <button className="navbar-toggler" id="navBut" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
        
          <li className="nav-item">
            <Link className="nav-link" to={'/home/userprofile'}>User profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/home/question'}>Questions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/home/companies'}>Companies</Link>
          </li>
         

        </ul>
      </div>
    </div>
  </nav>
  <div className="container ">
      <div className="row row-cols-md-3  row-cols-sm-2">
      <div className="col-md-2 col-sm-2 bord">
      <Home></Home>
      </div>
        <div className="col-md-7 col-sm-6 question-contain" >
        <Outlet/>
        </div>
        <div className="col-md-3 rightBar">
        <ul className="d-block p0 m0 mt-5">
                    <li class="s-sidebarwidget--header s-sidebarwidget__small-bold-text d-flex fc-black-600 d:fc-black-900 bb bbw1">
                        The Overflow Blog
                    </li>
        <li class="s-sidebarwidget--item d-flex px16">
            <div class="flex--item1 fl-shrink0">
<svg aria-hidden="true" class="va-text-top svg-icon iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path></svg>            </div>
            <div class="flex--item wmn0 ow-break-word">
                <a href="https://stackoverflow.blog/2022/10/03/two-heads-are-better-than-one-what-second-brains-say-about-how-developers-work/?cb=1" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2022/10/03/two-heads-are-better-than-one-what-second-brains-say-about-how-developers-work/&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 1, position: 0 })">Two heads are better than one: What second brains say about how developers work</a>
            </div>
        </li>
        <li class="s-sidebarwidget--item d-flex px16">
            <div class="flex--item1 fl-shrink0">
<svg aria-hidden="true" class="va-text-top svg-icon iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path></svg>            </div>
            <div class="flex--item wmn0 ow-break-word">
                <a href="https://stackoverflow.blog/2022/10/04/the-many-strengths-of-neurodivergence%ef%bf%bc/?cb=1" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2022/10/04/the-many-strengths-of-neurodivergence%ef%bf%bc/&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 1, position: 1 })">The many strengths of neurodivergence￼</a>
            </div>
        </li>
                    <li class="s-sidebarwidget--header s-sidebarwidget__small-bold-text d-flex fc-black-600 d:fc-black-900 bb bbw1">
                        Featured on Meta
                    </li>
        <li class="s-sidebarwidget--item d-flex px16">
            <div class="flex--item1 fl-shrink0">
<div class="favicon favicon-stackexchangemeta" title="Meta Stack Exchange"></div>            </div>
            <div class="flex--item wmn0 ow-break-word">
                <a href="https://meta.stackexchange.com/questions/382079/recent-color-contrast-changes-and-accessibility-updates?cb=1" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/382079/recent-color-contrast-changes-and-accessibility-updates&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 3, position: 2 })">Recent Color Contrast Changes and Accessibility Updates</a>
            </div>
        </li>
        <li class="s-sidebarwidget--item d-flex px16">
            <div class="flex--item1 fl-shrink0">
<div class="favicon favicon-stackoverflowmeta" title="Meta Stack Overflow"></div>            </div>
            <div class="flex--item wmn0 ow-break-word">
                <a href="https://meta.stackoverflow.com/questions/420349/reviewer-overboard-or-a-request-to-improve-the-onboarding-guidance-for-new-revi?cb=1" class="js-gps-track" title="Reviewer overboard! Or a request to improve the onboarding guidance for new reviewers in the suggested edits queue" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/420349/reviewer-overboard-or-a-request-to-improve-the-onboarding-guidance-for-new-revi&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 6, position: 3 })">Reviewer overboard! Or a request to improve the onboarding guidance for new...</a>
            </div>
        </li>
        <li class="s-sidebarwidget--item d-flex px16">
            <div class="flex--item1 fl-shrink0">
<div class="favicon favicon-stackoverflowmeta" title="Meta Stack Overflow"></div>            </div>
            <div class="flex--item wmn0 ow-break-word">
                <a href="https://meta.stackoverflow.com/questions/420537/collectives-update-recognized-members-articles-and-gitlab?cb=1" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/420537/collectives-update-recognized-members-articles-and-gitlab&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 6, position: 4 })">Collectives Update: Recognized Members, Articles, and GitLab</a>
            </div>
        </li>
        <li class="s-sidebarwidget--item d-flex px16">
            <div class="flex--item1 fl-shrink0">
<div class="favicon favicon-stackoverflowmeta" title="Meta Stack Overflow"></div>            </div>
            <div class="flex--item wmn0 ow-break-word">
                <a href="https://meta.stackoverflow.com/questions/416114/should-i-explain-other-peoples-code-only-answers?cb=1" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/416114/should-i-explain-other-peoples-code-only-answers&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 6, position: 5 })">Should I explain other people's code-only answers?</a>
            </div>
        </li>
        <li class="s-sidebarwidget--item d-flex px16">
            <div class="flex--item1 fl-shrink0">
<div class="favicon favicon-stackoverflowmeta" title="Meta Stack Overflow"></div>            </div>
            <div class="flex--item wmn0 ow-break-word">
                <a href="https://meta.stackoverflow.com/questions/307542/the-placement-tag-is-being-burninated?cb=1" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/307542/the-placement-tag-is-being-burninated&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 6, position: 6 })">The [placement] tag is being burninated</a>
            </div>
        </li>
    </ul>
        </div>
      </div>
    </div>

<div className='footerZ'>
<FontAwesomeIcon style={{fontSize:'35px'}} icon={faStackOverflow} /> Stack overflow 
</div>

    
    </>
  )
}

export default Nav