import { Component, createRef } from 'react';
import { FormRecordResponseModal } from '../Modals/FormModal';

class RenderRecordForm extends Component {
  constructor(props) {
    super(props);

    this.formRenderer = createRef();

    this.state = {
      name: '',
      description: '',
      fields: [],
      recordAdded: false,
    };
  }

  async componentDidMount() {
    const { name, description, fields } = await this.props.getFormFields(
      this.props.formId
    );

    this.setState({ name, description, fields });
  }

  componentDidUpdate() {
    $(this.formRenderer.current).formRender({ formData: this.state.fields });
  }

  toggleModal = (e) => {
    this.setState({ recordAdded: false });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const data = {};

    this.state.fields.forEach((field) => {
      data[field.name] = e.target[field.name].value;
    });

    const record = await this.props.createFormRecord(this.props.formId, data);

    if (record) {
      this.setState({ recordAdded: true });
    }
  };

  render() {
    return (
      <>
        <form name={this.state.name} onSubmit={this.handleSubmit}>
          <div id="form-renderer" ref={this.formRenderer} />
        </form>
        <FormRecordResponseModal
          show={this.state.recordAdded}
          onHide={this.toggleModal}
        />
      </>
    );
  }
}

export default RenderRecordForm;
