"use client"; // se for Next.js app router

import { useState } from "react";

export default function AuthForm() {
  const [mode, setMode] = useState("login");
  const [showLoginPwd, setShowLoginPwd] = useState(false);
  const [showSignupPwd, setShowSignupPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const togglePwd = (who) => {
    if (who === "login") setShowLoginPwd(!showLoginPwd);
    if (who === "signup") setShowSignupPwd(!showSignupPwd);
    if (who === "confirm") setShowConfirmPwd(!showConfirmPwd);
  };

  return (
    <div className="bloco card">
      <div className="card-body py-4 px-md-5">
        {/* Abas */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${mode === "login" ? "active" : ""}`}
              onClick={() => setMode("login")}
            >
              <i className="fas fa-sign-in-alt me-2"></i> Login
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${mode === "signup" ? "active" : ""}`}
              onClick={() => setMode("signup")}
            >
              <i className="fas fa-user-plus me-2"></i> Cadastro
            </button>
          </li>
        </ul>

        {/* Aviso */}
        <div className="alert alert-info mb-4">
          <i className="fas fa-info-circle me-2"></i>
          Se você ainda não tem conta, selecione a aba Cadastro.
        </div>

        {/* Formulário */}
        {mode === "login" ? (
          <form id="loginForm">
            <div className="form-outline mb-4">
              <label htmlFor="loginUsername" className="form-label">Usuário ou Email</label>
              <input type="text" id="loginUsername" className="form-control" />
              <div className="invalid-feedback">Informe seu usuário ou email</div>
            </div>
            <div className="mb-4">
              <label htmlFor="loginPassword" className="form-label">Senha</label>
              <div className="input-group">
                <input
                  type={showLoginPwd ? "text" : "password"}
                  id="loginPassword"
                  className="form-control"
                />
                <span className="input-group-text">
                  <i
                    className={`far fa-eye${showLoginPwd ? "" : "-slash"}`}
                    onClick={() => togglePwd("login")}
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
              </div>
              <div className="invalid-feedback">Informe sua senha</div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Lembrar-me
                </label>
              </div>
              <a href="#" className="text-decoration-none">Esqueceu a senha?</a>
            </div>
            <button type="button" id="loginBtn" className="btn btn-primary w-100 mb-4">
              <i className="fas fa-sign-in-alt me-2"></i> Login
            </button>
            <div className="text-center">
              <p>Ou entre com:</p>
              <div className="social-login">
                <button type="button" className="btn btn-link"><i className="fab fa-facebook-f"></i></button>
                <button type="button" className="btn btn-link"><i className="fab fa-google"></i></button>
                <button type="button" className="btn btn-link"><i className="fab fa-twitter"></i></button>
              </div>
            </div>
          </form>
        ) : (
          <form id="signupForm">
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">Nome</label>
                <input type="text" id="firstName" className="form-control" />
                <div className="invalid-feedback">Informe seu nome</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Sobrenome</label>
                <input type="text" id="lastName" className="form-control" />
                <div className="invalid-feedback">Informe seu sobrenome</div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <label htmlFor="signupEmail" className="form-label">Email</label>
              <input type="email" id="signupEmail" className="form-control" />
              <div className="invalid-feedback">Informe um email válido</div>
            </div>
            <div className="mb-4">
              <label htmlFor="signupPassword" className="form-label">Senha</label>
              <div className="input-group">
                <input
                  type={showSignupPwd ? "text" : "password"}
                  id="signupPassword"
                  className="form-control"
                  maxLength="16"
                />
                <span className="input-group-text">
                  <i
                    className={`far fa-eye${showSignupPwd ? "" : "-slash"}`}
                    onClick={() => togglePwd("signup")}
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
              </div>
              <div className="invalid-feedback">Senha inváida</div>
              {/* Aqui você pode adicionar requisitos de senha em React */}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">Confirme a senha</label>
              <div className="input-group">
                <input
                  type={showConfirmPwd ? "text" : "password"}
                  id="confirmPassword"
                  className="form-control"
                  maxLength="16"
                />
                <span className="input-group-text">
                  <i
                    className={`far fa-eye${showConfirmPwd ? "" : "-slash"}`}
                    onClick={() => togglePwd("confirm")}
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
              </div>
              <div className="invalid-feedback">Senhas não conferem</div>
            </div>
            <div className="form-check d-flex mb-4">
              <input className="form-check-input me-2" type="checkbox" id="agreeTerms" />
              <label className="form-check-label" htmlFor="agreeTerms">
                Quero receber notificações sobre novidades
              </label>
            </div>
            <button type="button" id="signupBtn" className="btn btn-success w-100 mb-4">
              <i className="fas fa-user-plus me-2"></i> Cadastrar
            </button>
            <div className="text-center">
              <p>Ou cadastre-se com:</p>
              <div className="social-login">
                <button type="button" className="btn btn-link"><i className="fab fa-facebook-f"></i></button>
                <button type="button" className="btn btn-link"><i className="fab fa-google"></i></button>
                <button type="button" className="btn btn-link"><i className="fab fa-twitter"></i></button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
