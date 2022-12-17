// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Demo Components
import CompanyTable from './CompanyTable'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'

// **AntD Components
import Button from '@src/@core/components/input/Button'
import Title from '@src/@core/components/input/Title'
import { Divider } from 'antd'
import Grid from "@src/@core/components/input/Grid"
import Layout from "@src/@core/components/input/Layout"
import { Space } from 'antd'

import Anchor from "@src/@core/components/input/Anchor"
import Breadcrumb from "@src/@core/components/input/Breadcrumb"
import Dropdown from "@src/@core/components/input/Dropdown"
import Menu from "@src/@core/components/input/Menu"
import Pagination from "@src/@core/components/input/Pagination"
import Steps from "@src/@core/components/input/Steps"


import Input from "@components/input"
// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import { Bar } from 'react-chartjs-2'

const EcommerceDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** vars
  const trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>

<Space direction="vertical">
<h1>Button</h1>
<Button/>

<h1>Title</h1>
<Title/>

<h1>Divider</h1>
<Divider/>

<h1>Grid</h1>
<Grid/>

<h1>Layout</h1>
<Layout/>

<h1>Space</h1>
<Space/>

<h1>Anchor</h1>
<Anchor/>

<h1>Breadcrumb</h1>
<Breadcrumb/>

<h1>Dropdown</h1>
<Dropdown/>

<h1>Menu</h1>
<Menu/>

<h1>Pagination</h1>
<Pagination/>

<h1>Steps</h1>
<Steps/>

</Space>
    </div>
  )
}

export default EcommerceDashboard
