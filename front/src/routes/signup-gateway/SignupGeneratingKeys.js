import { Text, MarkupText } from 'preact-i18n';
import style from './spinner.css';

const SignupGeneratingKeys = ({ children, ...props }) => (
  <div onSubmit={props.validateForm} className="card" style={{ height: '250px' }}>
    <div className="card-body p-6">
      <div className="card-title" style={{ textAlign: 'center' }}>
        {!props.signupCompleted && <Text id="gatewaySignUp.generatingKey" />}
        {props.signupCompleted && !props.token && <Text id="gatewaySignUp.complete" />}
        {props.signupCompleted && props.token && (
          <p>
            <MarkupText id="gatewaySignUp.done" />
          </p>
        )}
      </div>
      {!props.signupCompleted && <div class={style.spWave + ' ' + style.sp} />}

      {props.signupCompleted && (
        <div class={style['circle-loader'] + ' ' + style['load-complete']}>
          <div class={style.checkmark + ' ' + style.draw} />
        </div>
      )}
      <div />
    </div>
  </div>
);

export default SignupGeneratingKeys;
