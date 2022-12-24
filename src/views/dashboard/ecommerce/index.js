// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  CardBody,
  CardTitle,
  CardHeader,
  InputGroup,
  InputGroupText
} from 'reactstrap'
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
//General
import Button from '@src/@core/components/input/general/Button'

//Layout
import Title from '@src/@core/components/input/general/Title'
import { Divider } from 'antd'
import Grid from "@src/@core/components/input/layout/Grid"
import Layout from "@src/@core/components/input/layout/Layout"
import { Space } from 'antd'

//Navigation
import Anchor from "@src/@core/components/input/navigation/Anchor"
import Breadcrumb from "@src/@core/components/input/navigation/Breadcrumb"
import Dropdown from "@src/@core/components/input/navigation/Dropdown"
import Menu from "@src/@core/components/input/navigation/Menu"
import Pagination from "@src/@core/components/input/navigation/Pagination"
import Steps from "@src/@core/components/input/navigation/Steps"

//Data Entry
import AutoComplete from "@src/@core/components/input/dataEntry/AutoComplete"
import Cascader from "@src/@core/components/input/dataEntry/Cascader"
import Checkbox from "@src/@core/components/input/dataEntry/Checkbox"
import DatePicker from "@src/@core/components/input/dataEntry/DatePicker"
// import {Form as MyForm} from "@src/@core/components/input/dataEntry/Form"
import Input from "@src/@core/components/input/dataEntry/Input"
import InputNumber from "@src/@core/components/input/dataEntry/InputNumber"
import Mentions from "@src/@core/components/input/dataEntry/Mentions"
import Radio from "@src/@core/components/input/dataEntry/Radio"
import Rate from "@src/@core/components/input/dataEntry/Rate"
import Select from "@src/@core/components/input/dataEntry/Select"
import Slider from "@src/@core/components/input/dataEntry/Slider"
import Switch from "@src/@core/components/input/dataEntry/Switch"
import TimePicker from "@src/@core/components/input/dataEntry/TimePicker"
import Transfer from "@src/@core/components/input/dataEntry/Transfer"
import TreeSelect from "@src/@core/components/input/dataEntry/TreeSelect"
import Upload from "@src/@core/components/input/dataEntry/Upload"

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
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Vertical Form with Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col sm='12' className='mb-1'>
              <Title />
              <Select />
            </Col>
            <Col sm='12' className='mb-1'>
              <Switch />
            </Col>
            <Col sm='12' className='mb-1'>
              <Input label="hihi ;)" placeholder="wolalalalal" />
            </Col>
            <Col sm='12' className='mb-1'>
              <Checkbox />
            </Col>
            <Col sm='12' className='mb-1'>
              <Button />
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )

  return (
    <div id='dashboard-ecommerce'>

      <Space direction="vertical">


        <h1>**********[GENERAL]**********</h1>

        <h1>Button</h1>
        <Button />

        <h1>Title</h1>
        <Title />



        <h1>**********[LAYOUT]**********</h1>
        <h1>Divider</h1>
        <Divider />

        <h1>Grid</h1>
        <Grid />

        <h1>Layout</h1>
        <Layout />

        <h1>Space</h1>


        <h1>**********[NAVIGATION]**********</h1>
        <h1>Anchor</h1>
        <Anchor />

        <h1>Breadcrumb</h1>
        <Breadcrumb />

        <h1>Dropdown</h1>
        <Dropdown />

        <h1>Menu</h1>
        <Menu />

        <h1>Pagination</h1>
        <Pagination />

        <h1>Steps</h1>
        <Steps />

        <h1>**********[DATA ENTRY]**********</h1>
        <h1>Auto Complete</h1>
        <AutoComplete />

        <h1>Cascader</h1>
        <Cascader />

        <h1>Checkbox</h1>
        <Checkbox />

        <h1>Date Picker</h1>
        <DatePicker />

        <h1>Form</h1>
        <Form />

        <h1>Input</h1>
        <Input />

        <h1>Input Number</h1>
        <InputNumber />

        <h1>Mentions</h1>
        <Mentions />

        <h1>Radio</h1>
        <Radio />

        <h1>Rate</h1>
        <Rate />

        <h1>Select</h1>
        <Select />

        <h1>Slider</h1>
        <Slider />

        <h1>Switch</h1>
        <Switch />

        <h1>TimePicker</h1>
        <TimePicker />

        <h1>Transfer</h1>
        <Transfer />

        <h1>TreeSelect</h1>
        <TreeSelect />

        <h1>Upload</h1>
        <Upload />




      </Space>
    </div>
  )
}

export default EcommerceDashboard
