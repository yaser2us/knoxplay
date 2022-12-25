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

const CardContainer = ({ item, field, child, ...rest }) => {
   
    if (!item) return;
    const { label, placeholder, name } = item;
    const { onChange, value } = field;

    console.log("CardContainer", "hehehehehhrhehehhehrhhereh");

    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>
                    {label}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Form>
                    <Row>
                        {child}
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}

export default CardContainer;