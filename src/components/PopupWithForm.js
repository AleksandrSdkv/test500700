import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  /** @module Отвечает за открытие попапов форм*/
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector(".form");
    this._btnSave = this._formElement.querySelector(".form__bottom-submit");
    
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      alert("Спасибо за обращение!");
    });
  }

  close() {
    //закрывает и отчищает инпуты
    super.close();
    this._formElement.reset();
  }
}
