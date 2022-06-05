import { Component, createRef } from 'react';
import { FormRecordResponseModal } from '../Modals/FormModal';

class CreateRecordForm extends Component {
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
    const { name, description, fields } = await this.props.getFormInfo(
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
      try {
        data[field.name] = e.target[field.name].value;
      } catch {
        if (e.target[`${field.name}[]`]) {
          const targets = e.target[`${field.name}[]`];
          const values = [];

          if (targets.checked) {
            values.push(targets.value);
          } else {
            for (let i = 0; i < targets.length; i++) {
              if (targets[i].checked) {
                values.push(targets[i].value);
              }
            }
          }

          data[field.name] = values;
        }
      }
    });

    const record = await this.props.createRecord(this.props.formId, data);

    if (record) {
      this.setState({ recordAdded: true });
    }
  };

  render() {
    return (
      <div
        className="flex justify-center -mt-14"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <form
          className="shadow-md dark:shadow-3xl rounded-3xl border dark:border-gray-700 w-full mx-10 sm:w-1/2 lg:w-2/5 p-10"
          name={this.state.name}
          onSubmit={this.handleSubmit}
        >
          <h1 className="font-semibold text-3xl mb-7">{this.state.name}</h1>
          {this.state.description ? (
            <h1 className="text-gray-500 text-2xl mb-7">
              {this.state.description}
            </h1>
          ) : null}
          <div id="form-renderer" ref={this.formRenderer} />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <FormRecordResponseModal
          show={this.state.recordAdded}
          onHide={this.toggleModal}
        />
      </div>
    );
  }
}

export default CreateRecordForm;
