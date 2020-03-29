import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    padding-bottom: 20px;
    margin-top: 80px;
    margin-bottom: 24;
    transition: color 1s ease 0s, transform 1s ease 0s;
    color: ${(props) => props.theme.colors.text};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background: ${(props) => props.theme.colors.input};
      padding: 24px;
      border-radius: 8px;
      position: relative;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      transition: all 0.2s ease 0s;
      border-image: initial;
      &:hover {
        border: 2px solid #e02041;
        border-image: initial;
      }

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;

        display: flex;

        -webkit-box-pack: center;
        justify-content: center;
        border-radius: 8px;
        transition: border 0.2s ease 0s, transform 0.2s ease 0s;
        border: 3px solid transparent;
        border-image: initial;

        svg {
          transition: border 0.2s ease 0s, transform 0.2s ease 0s;
          color: ${(props) => props.theme.colors.text};
        }

        &:hover {
          transform: translateY(-7px);
          border-color: transparent;
          svg {
            color: ${(props) => props.theme.colors.text};
          }
        }
      }

      strong {
        display: block;
        margin-bottom: 16px;

        transition: color 1s ease 0s, transform 1s ease 0s;
        color: ${(props) => props.theme.colors.text};
      }

      p + strong {
        margin-top: 32px;
      }

      p {
        color: #999;
        line-height: 21px;
        font-size: 16px;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
    transition: color 1s ease 0s, transform 1s ease 0s;
    color: ${(props) => props.theme.colors.text};
  }

  img {
    height: 64px;
  }

  a {
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;

    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    transition: border 0.2s ease 0s, transform 0.2s ease 0s;
    border: 3px solid ${(props) => props.theme.colors.background};
    border-image: initial;

    &:hover {
      transform: translateY(-5px);
      border-color: ${(props) => props.theme.colors.text};
    }

    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
    display: flex;

    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 8px;
    transition: border 0.2s ease 0s, transform 0.2s ease 0s;
    border: ${(props) =>
      props.theme.title === 'light'
        ? '1px solid #dcdce6'
        : `1px solid #1c1c1c`};
    border-image: initial;

    &:hover {
      transform: translateY(-5px);
      border: ${(props) =>
        props.theme.title === 'light'
          ? '3px solid #0C090D'
          : `3px solid #1c1c1c`};
    }
  }
`;
