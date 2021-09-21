import React from 'react'

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // textInput DOM öğesini depolamak için bir ref oluşturun
      this.textInput = React.createRef();
    }
    render() {
    // text input DOM'a bir referans depolamak için `ref` callback'i (geri çağrı) kullanın
    // bir instance alanındaki öğe (örneğin, this.textInput).
      return (
        <input
          type="text"
          ref={this.textInput}
          placeholder="input area"
        />
      );
    }
    focus() {
        // Açık bir şekilde, işlenmemiş DOM API'ı kullanarak metin girişine odaklanın
        // Not: DOM düğümünü almak için "current"e erişiyoruz
        this.textInput.current.focus();
      }
  }

  export default CustomTextInput