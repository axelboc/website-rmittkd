import CMS from 'netlify-cms'
import PagePreview from './page-preview'

import './styles.css'

import IndexPage from '../pages/index'
import TkdPage from '../pages/tkd'
import DojangPage from '../pages/dojang'
import ContactPage from '../pages/contact'

CMS.registerPreviewTemplate('home', PagePreview(IndexPage))
CMS.registerPreviewTemplate('tkd', PagePreview(TkdPage))
CMS.registerPreviewTemplate('dojang', PagePreview(DojangPage))
CMS.registerPreviewTemplate('contact', PagePreview(ContactPage))
