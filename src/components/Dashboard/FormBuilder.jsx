import { Component, createRef } from 'react';
import CTA from '../CTA/CTA';
import ValidateFormModal, { FormResponseModal } from '../Modals/FormModal';
import PageTitle from '../Typography/PageTitle';
import http from '../../utils/http';

class FormBuilder extends Component {
  constructor(props) {
    super(props);

    this.formBuilder = createRef();

    this.state = {
      name: '',
      description: '',
      showCreateModal: true,
      showResponseModal: false,
      modalBody: '',
      formCreated: false,
    };

    this.formOptions = {
      controlOrder: [
        'header',
        'paragraph',
        'text',
        'number',
        'date',
        'textarea',
        'checkbox-group',
        'radio-group',
        'autocomplete',
        'select',
      ],
      disableFields: ['button', 'hidden', 'file'],
      onSave: async (e, formData) => {
        const { name, description } = this.state;
        const fields = JSON.parse(formData);
        const project = this.props.project;

        try {
          const { status } = await http.post(`projects/${project}/forms/new`, {
            name,
            description,
            fields,
          });

          this.setState({ showResponseModal: true, formCreated: true });

          if (status === 200) {
            this.setState({ modalBody: 'Form created successfully.' });
          }
        } catch ({ response }) {
          this.setState({ showResponseModal: true });

          if (
            response.data.reason &&
            response.data.reason.indexOf("'fields'") === 0
          ) {
            this.setState({ modalBody: 'Fields cannot be empty.' });
          } else {
            this.setState({
              modalBody: 'Failed to create form, please try again.',
            });
          }
        }
      },
    };
  }

  componentDidUpdate() {
    if (
      this.state.name &&
      !this.state.showCreateModal &&
      !this.state.showResponseModal &&
      !this.state.modalBody
    ) {
      $(this.formBuilder.current).formBuilder(this.formOptions);
    }
  }

  onSuccess = (newName, newDescription) => {
    this.setState({
      showCreateModal: false,
      name: newName,
      description: newDescription,
    });
  };

  toggleFormResponseModal = (e) => this.setState({ showResponseModal: false });

  render() {
    return (
      <>
        <div>
          <PageTitle>Create form</PageTitle>
        </div>

        <CTA />

        <div id="form-builder" ref={this.formBuilder} />

        <ValidateFormModal
          show={this.state.showCreateModal}
          onSuccess={this.onSuccess}
        />
        <FormResponseModal
          title="Status"
          body={this.state.modalBody}
          show={this.state.showResponseModal}
          created={this.state.formCreated}
          onHide={this.toggleFormResponseModal}
        />
      </>
    );
  }
}

export default FormBuilder;
