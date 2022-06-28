const Docs = () => {
  return (
    <div>
      <article className="prose">
        <br />
        <h1 className="mx-5 text-5xl text-cyan-600 body-font font-poppins">
          <b>Welcome to BaaP developer documentation!</b>
        </h1>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          This documentation contains all technical documentation related to the
          setup, deployment, update and customization of your BaaP application.
        </p>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          The original purpose of the project was to help users with the help of
          Graphical User Interface to put forward the needed database schema
          information with the relationships among them as well as the
          information regarding the API endpoints and as a result, the required
          back-end server with all the needed functionalities along with the
          database will be generated. <br />
          <br />
          Basically Backend as a Platform (BaaP) is a No-code Backend as a
          Service platform. The technologies used here include TypeScript,
          Node.js, Express.js, REST APIs and MongoDB.
        </p>
        <br />
        <h2 className="mx-5 text-3xl text-neutral-600 body-font font-poppins">
          <b>Open-source & Contribution</b>
        </h2>
        <br />
        <p className=" mx-5 text-gray-600 body-font font-poppins">
          Backend as a Platform (BaaP) is an open-source project Licensed under
          MIT. The core project, as well as the documentation and any related
          tool can be found in the backend-as-a-platform in GitHub Organisation.
          <br />
          <br />
          <a
            className="text-cyan-600"
            href="https://github.com/backend-as-a-platform/backend"
            target="_blank"
          >
            https://github.com/backend-as-a-platform/backend
          </a>
          <br />
          <a
            className="text-cyan-600"
            href="https://github.com/backend-as-a-platform/frontend"
            target="_blank"
          >
            https://github.com/backend-as-a-platform/frontend
          </a>
        </p>
        <br />
        <p className=" mx-5 text-gray-600 body-font font-poppins">
          As it goes hand in hand with the open-source ecosystem, BaaP is open
          to contributions. We appreciate every contribution, be it a feature
          request, bug report, or pull request. The following GitHub
          repositories are open-source and contributions-friendly.
        </p>
        <br />
        <h2 className="mx-5 text-3xl text-neutral-600 body-font font-poppins">
          <b>Quick Start Guide</b>
        </h2>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          BaaP offers a lot of flexibility. Whether you want to go fast and
          quickly see the final result, or would rather dive deeper into the
          product, we got you covered.
          <br />
        </p>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Part A: Create a new project</b>
          <br />
          <br />
          <ul className="list-no disc body-font font-poppins">
            <li>
              1. Enter your credentials and Signup/ Register into the BaaP
              platform.
            </li>
            <li>
              2. After successful registration, Login into the application.
            </li>
            <li>
              3. On the Dashboard page, Click on Create Project and enter the
              Name and Description of your project and click on the submit
              button.
            </li>
          </ul>
        </p>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Part B: Build Forms</b>
        </p>
        <br />
        <ul className=" mx-5 list-no-disc body-font font-poppins">
          <li>
            1. On entering into the project page click on Create forms and enter
            the Name of the form and click submit.
          </li>
          <li>
            2. A GUI based form builder page will be loaded.Here you can drag
            and drop form components.
          </li>
          <li>
            3. After being done, you can view the corresponding JSON Schema of
            the form by Clicking code Button from the below.
          </li>
          <li>
            {' '}
            4. You can save the form by clicking the Save button which will
            redirect you to a list of saved forms.
          </li>
          <li>
            5. You can either Archive, Delete or Edit the form from the
            corresponding page
          </li>
        </ul>
        <br />
        <h2 className="mx-5 text-3xl text-neutral-600 body-font font-poppins">
          <b>API Endpoints</b>
        </h2>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          <span className="font-extrabold">:</span> indicate(s) URL
          parameter(s).
          <br />
          <span className="font-extrabold">*</span> indicates that Authorization
          Token is required.
          <br />
          values within braces indicates required/optional JSON parameters.
        </p>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Users</b>
        </p>
        <br />
        <div className="mx-5 mockup-code base-300">
          <pre>
            <code className="text-amber-500">
              Signup - POST /users/signup &#123;name, email, password&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Login - POST /users/login &#123;email, password&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Find user by ID - GET /users/:id
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Send verification email - GET /users/:id/send-verification
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get user's avatar image - GET /users/:id/avatar.png
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Verify user profile - GET /users/verify/:verificationToken
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Send password reset email - POST /users/request-password-reset{' '}
              &#123;email&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get user profile - GET /users/profile *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Delete user profile - DELETE /users/profile *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Update user profile - UPDATE /users/profile * &#123;name, email,
              password&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Update user's avatar image - POST /users/profile/avatar *
              &#123;avatar&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Delete user's avatar image - DELETE /users/profile/avatar *
              &#123;avatar&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Find user by Email - GET /users/mail/:email *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Logout current browser session - GET /users/logout *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Logout all browser sessions - GET /users/logout/all *
            </code>
          </pre>
        </div>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Projects</b>
        </p>
        <br />
        <div className="mx-5 mockup-code base-300">
          <pre>
            <code className="text-amber-500">
              Get dashboard statistics - GET /projects/stats *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get all the projects owned by the user - GET /projects
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Create a new project - POST /projects/new * &#123;name,
              description, access, restrictedTo&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get owned project by ID - GET /projects/:projectId *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Update owned project by ID - PUT /projects/:projectId *
              &#123;name, description, access, restrictedTo&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Delete owned project by ID - DELETE /projects/:projectId *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Clone an accessible project owned by another user with it's ID -
              POST /projects/:projectId/clone * &#123;name, description, access,
              restrictedTo&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Archive/unarchive owned project by ID - POST
              /projects/:projectId/status * &#123;active&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get all the forms that are part of a project - GET
              /projects/:projectId/forms *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Create a new form under a project by it's ID - POST
              /projects/:projectId/forms/new * &#123;name, description,
              fields&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get a form under a project by their respective IDs - GET
              /projects/:projectId/forms/:formId *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Update a form under a project by their respective IDs - PUT
              /projects/:projectId/forms/:formId * &#123;name, description,
              fields&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Delete a form under a project by their respective IDs - DELETE
              /projects/:projectId/forms/:formId *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Share a form to other users under a project by their respective
              IDs - POST /projects/:projectId/forms/:formId/share *{' '}
              &#123;access, restrictedTo&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Archive/unarchive a form under a project by their respective IDs -
              POST /projects/:projectId/forms/:formId/status *
              &#123;active&#125;
            </code>
          </pre>
        </div>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Forms</b>
          <br />
          <br />
          <p className="text-gray-600 body-font font-poppins">
            <span className="font-extrabold">&#123;...&#125;</span> indicates
            dynamic fields of a form.
          </p>
          <p className="text-gray-600 body-font font-poppins">
            <span className="font-extrabold">[v/:version]</span> indicates
            optional version of a form (each form schema update is a new
            version). If this path is omitted, latest version will be fetched
            always.
          </p>
          <p className="text-gray-600 body-font font-poppins">
            <span className="font-extrabold">[?format=file-format]</span>{' '}
            indicates the form records need to be exported in the specified
            format. Format includes ['csv', 'html', 'json', 'rtf', 'txt',
            'xlsx'].
          </p>
        </p>
        <br />
        <div className="mx-5 mockup-code base-300">
          <pre>
            <code className="text-amber-500">
              Create a new form record by ID - POST /forms/:formId *
              &#123;...&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get all the form records by ID - GET
              /forms/:formId/[v/:version][?format=file-format] *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get a form record by ID - GET
              /forms/:formId/[v/:version]/:recordId *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Update a form record by ID - PUT
              /forms/:formId/[v/:version]/:recordId * &#123;...&#125;
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Delete a form record by ID - DELETE
              /forms/:formId/[v/:version]/:recordId *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Get the schema related information about a form by ID - GET
              /forms/:formId/info *
            </code>
          </pre>
          <pre>
            <code className="text-amber-500">
              Download an exported file of form records by name - GET
              /forms/download?file=:file-name
            </code>
          </pre>
        </div>
        <br />
      </article>
    </div>
  );
};

export default Docs;
