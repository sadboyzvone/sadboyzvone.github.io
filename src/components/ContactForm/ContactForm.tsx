import React from "react";
import { IoMdContact } from "react-icons/io";
import {
  Container,
  Form,
  Input,
  InputContainer,
  InputLabel,
  Label,
  SubmitButton,
  TextArea,
} from "./ContactFormComponents";

function ContactForm() {
  return (
    <Container>
      <Label>
        <IoMdContact />
        Contact me
      </Label>
      <Form>
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <Input type="text" />
        </InputContainer>

        <InputContainer>
          <InputLabel>E-mail</InputLabel>
          <Input type="email" />
        </InputContainer>

        <InputContainer>
          <InputLabel>Message</InputLabel>
          <TextArea rows={3}></TextArea>
        </InputContainer>

        <SubmitButton>Send message</SubmitButton>
      </Form>
    </Container>
  );
}

export default ContactForm;
