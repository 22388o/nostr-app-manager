import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import * as cmn from "../common"
import OtherApp from "../icons/OtherApp"

const AppSelectItem = (props) => {

  const app = props.app.profile;
  const getUrl = props.getUrl || (h => cmn.formatAppUrl(cmn.getNaddr(h)));
  const onSelect = props.onSelect || (() => {});

  let used = "";
  if (props.app.forKinds) {
    for (const k of props.app.forKinds) {
      if (used) used += ", ";
      used += cmn.getKindLabel(k);
    }
  }

  const showKinds = props.showKinds && props.app.forKinds;
  
  return (
    <ListGroup.Item className="highlight position-relative">
      <Row>
	<Col xs="auto">
	  <Link className="stretched-link" to={getUrl(props.app)} onClick={(e) => onSelect(props.app, e)}>
	    {app.picture && (<img alt="" width="64" height="64" src={app.picture} />)}
	    {!app.picture && (<OtherApp />)}
	  </Link>
	</Col>
	<Col><div className="ms-2 me-auto">
	  <div className="fw-bold">{app.display_name || app.name}</div>
	  {app?.about}
	  {showKinds && (
	    <div><small className="text-muted">Used for: {used}</small></div>
	  )}
	</div>
	</Col>
      </Row>
    </ListGroup.Item>
  )
}

export default AppSelectItem;