import React from "react";

class BlurExample extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.timeOutId = null;
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onBlurHandler = this.onBlurHandler.bind(this);
      this.onFocusHandler = this.onFocusHandler.bind(this);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    // Bir sonraki tıklamada, setTimeout kullanarak açılır pencereyi (popover) kapatıyoruz.
    // Bu gereklidir çünkü önce kontrol etmemiz gerekiyor, eğer
    // öğenin başka bir alt öğesine odaklanılmışsa, 
    // bulanıklık olayı, yeni odak olayından önce tetiklendiği.
    onBlurHandler() {
      this.timeOutId = setTimeout(() => {
        this.setState({
          isOpen: false
        });
      });
    }
  
    // Bir alt öğeye odaklanılırsa, açılır pencereyi (popover) kapatmayın
    onFocusHandler() {
      clearTimeout(this.timeOutId);
    }
  
    render() {
      // React bulanıklığı köpürterek ve
      // olayları üst öğeye odaklayarak bize yardımcı olur
      return (
        <div onBlur={this.onBlurHandler}
             onFocus={this.onFocusHandler}>
          <button onClick={this.onClickHandler}
                  aria-haspopup="true"
                  aria-expanded={this.state.isOpen}>
            Select an option
          </button>
          {this.state.isOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      );
    }
  }

  export default BlurExample