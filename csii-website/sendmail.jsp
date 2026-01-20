
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.Arrays, javax.mail.internet.InternetAddress, org.apache.commons.mail.Email, org.apache.commons.mail.HtmlEmail" %>

<%!
  String host = "smtp.zeptomail.in";
  String from = "tuba-hrms@csii.in";

  public String getFormattedText(
    String fullName,
     String phone,
     String company,
     String emailaddress,
     String city,
     String product,
     String details
    ) {
    StringBuffer buff = new StringBuffer();
    buff.append(String.format("Enquiry Received \n"));
    buff.append(String.format("Name= %s \n", fullName));
    buff.append(String.format("Phone= %s \n", phone));
    buff.append(String.format("Company= %s \n", company));
    buff.append(String.format("Email= %s \n", emailaddress));
    buff.append(String.format("City= %s \n", city));
    buff.append(String.format("Product= %s \n", product));
    buff.append(String.format("details= %s \n", details));
    return buff.toString();
  }
%>
<%

out.print("whatever you want to echo");
String fullName = request.getParameter("fullName");
String phone = request.getParameter("phone");
String company = request.getParameter("company");
String emailaddress = request.getParameter("mail");
String city = request.getParameter("city");
String product = request.getParameter("product");
String details = request.getParameter("details");

  // DEPRTMENT MAIL
  Email email  = new HtmlEmail();
  email.setHostName(host);
  email.setStartTLSEnabled(true);
  email.setSSLOnConnect(true);
  email.setSmtpPort(465);
  email.setFrom(from);
  email.setAuthentication(from, "PHtE6r1cEbruiDR7p0cA5/W6QpOgM4x//+5keQQSuIdHCv5RTE0H/doswTfm/kgjB6QQR6Kbzohvsu6e4OuEID7vMjsZX2qyqK3sx/VYSPOZsbq6x00fs1Qfck3ZUoTrddBo3CbXvNrfNA==");
  email.setTo(Arrays.asList(InternetAddress.parse("sales@csii.in")));
  email.setSubject("New Enquiry Received from csii.in");
   email.setMsg(getFormattedText(fullName,phone,company,emailaddress,city,product,details));
 // email.setMsg("test message");
  email.setDebug(true);
  email.send();

// USER THANK YOU MAIL
Email email2  = new HtmlEmail();
email2.setHostName(host);
email2.setStartTLSEnabled(true);
email2.setSSLOnConnect(true);
email2.setSmtpPort(465);
email2.setFrom(from);
email2.setAuthentication(from, "PHtE6r1cEbruiDR7p0cA5/W6QpOgM4x//+5keQQSuIdHCv5RTE0H/doswTfm/kgjB6QQR6Kbzohvsu6e4OuEID7vMjsZX2qyqK3sx/VYSPOZsbq6x00fs1Qfck3ZUoTrddBo3CbXvNrfNA==");
email2.setTo(Arrays.asList(InternetAddress.parse(emailaddress)));
email2.setSubject("Enquiry Received");
email2.setMsg("Thank you for submitting your enquiry. We have received it successfully, and our dedicated sales team will be reaching out to you shortly. Your interest is valuable to us, and we look forward to providing you with the information and assistance you need. If you have any further questions or require immediate assistance, please don't hesitate to contact us.");
email2.setDebug(true);
email2.send();
  response.sendRedirect("thankyou.html");
%>