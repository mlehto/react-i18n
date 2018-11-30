import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withLocalize, Translate } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "./global.json";
import LanguageToggle from './LanguageSelector';

class Main extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "Finnish", code: "fr" }
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });

    this.props.addTranslation(globalTranslations);
  }

  componentDidUpdate(prevProps) {
    const prevLangCode = prevProps.activeLanguage && prevProps.activeLanguage.code;
    const curLangCode = this.props.activeLanguage && this.props.activeLanguage.code;
    const hasLanguageChanged = prevLangCode !== curLangCode;
    console.log('test', hasLanguageChanged);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Translate id="help" />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <LanguageToggle />
        </header>
      </div>
    );
  }
}

export default withLocalize(Main);
