import './styles.css'

import CMS from 'netlify-cms'

import ContactPage from '../pages/contact'
import DojangPage from '../pages/dojang'
import IndexPage from '../pages/index'
import TkdPage from '../pages/tkd'
import PagePreview from './page-preview'

CMS.registerPreviewTemplate('home', PagePreview(IndexPage))
CMS.registerPreviewTemplate('tkd', PagePreview(TkdPage))
CMS.registerPreviewTemplate('dojang', PagePreview(DojangPage))
CMS.registerPreviewTemplate('contact', PagePreview(ContactPage))
