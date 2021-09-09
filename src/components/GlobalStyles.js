import { createGlobalStyle } from 'styled-components'

const Globals = createGlobalStyle`
    :root {
        --primary-font: "Open Sans", Roboto, Helvetica, Arial, sans-serif;
        --secondary-font: Inter, Roboto, Helvetica, Arial, sans-serif;
        --border-radius-alpha: 0.5rem;
        --border-radius-beta: 1rem;
        --border-radius-gamma: 50%;
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5% !important;
    }

    body {
        background-color: ${({ theme }) => theme.colorPsi };
        color: ${({ theme }) => theme.colorOmega };
        font-family: var(--primary-font);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2;
    }

    .wrapper {
        max-width: 140rem;
        margin: auto;
        padding-left: 2rem;
        padding-right: 2rem;
        width: 100%;
    }

    .wrapper-fluid {
        padding-left: calc(2rem + 4vw);
        padding-right: calc(2rem + 4vw);

        @media screen and ( max-width: 576px ) {
            padding: 0 2rem;
        }
    }

    .display-grid {
        display: grid;
        grid-gap: 3rem;

        @media screen and ( min-width: 768px ) {
            grid-template-columns: repeat( auto-fit, minmax( 30rem, 1fr ));
        }
    }

    .columns {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 3rem;
    }

    .header-1, h1,
    .header-2, h2,
    .header-3, h3,
    .header-4, h4,
    .header-5, h5,
    .header-6, h6,
    .display-one,
    .display-two,
    .display-three,
    .display-four  {
        font-family: var(--secondary-font);
        font-weight: 700;
        line-height: 1.2;
        margin: 0;
    }

    h1, .header-1 {
        font-size: 4rem;
    }

    h2, .header-2 {
        font-size: 3.2rem;
    }

    h3, .header-3 {
        font-size: 2.5rem;
    }

    h4, .header-4 {
        font-size: 1.75rem;
    }

    h5, .header-5 {
        font-size: 1.55rem;
    }

    h6, .header-6 {
        font-size: 1rem;
    }

    @media screen and ( min-width: 768px ) {
        h1, .header-1 {
            font-size: 4.5rem;
        }

        h2, .header-2 {
            font-size: 3.8rem;
        }

        h3, .header-3 {
            font-size: 3rem;
        }

        h4, .header-4 {
            font-size: 2.25rem;
        }

        h5, .header-5 {
            font-size: 1.75rem;
        }

        h6, .header-6 {
            font-size: 1.25rem;
        }
    }

    .display-one {
        font-size: calc( 2.5rem + 5vw );
    }

    .display-two {
        font-size: calc( 2.5rem + 3.5vw );
    }

    .display-three {
        font-size: calc( 2.5rem + 2.8vw );
    }

    .display-four {
        font-size: calc( 2.5rem + 2.2vw );
    }

    .display-flex {
        display: flex;
    }

    .align-items-center {
        align-items: center;
    }

    .justify-content-center {
        justify-content: center;
    }

    .h-100 {
        height: 100%;
    }

    .w-100 {
        width: 100%;
    }

    .vh-100 {
        min-height: 100vh;
    }

    .vw-100 {
        min-width: 100vw;
    }

    .text-center {
        text-align: center;
    }

    .text-light {
        color: ${({ theme }) => theme.colorOmegaFixed };
    };

    .text-dark {
        color: ${({ theme }) => theme.colorPsiFixed };
    };

    .text-psi { 
        color: ${({ theme }) => theme.colorOmegaPsi };
    }

    .text-alpha {
        color: ${({ theme }) => theme.colorAlpha };
    }

    .text-beta {
        color: ${({ theme }) => theme.colorBeta };
    }

    .text-center {
        text-align: center;
    }

    .text-gamma {
        color: ${({ theme }) => theme.colorGamma };
    }

    .text-delta {
        color: ${({ theme }) => theme.colorDelta };
    }

    .text-uppercase {
        text-transform: uppercase;
    }

    .fw-500 {
        font-weight: 500;
    }

    .fw-600 {
        font-weight: 600;
    }

    .fw-700 {
        font-weight: 700;
    }

    .small-font {
        font-size: 1.4rem;
    }

    a {
        color: ${({ theme }) => theme.colorOmega };
        font-weight: 600;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    .bg-dark {
        background-color: ${({ theme }) => theme.colorPsiFixed };
    }

    :focus {
        outline: none !important;
    }

    .button {
        border-radius: 0.5rem;
        cursor: pointer;
        display: inline-block;
        font-size: 1.6rem;
        transition: color 0.25s linear;
        transition: background-color 0.25s linear;
    }

    .button-bg {
        background-color: ${({ theme }) => theme.colorDelta };
        border: none;
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.colorOmega };
        font-size: 1.6rem;
        font-weight: 600;
        padding: 0.8rem 2rem;

        &.light-btn {
            background-color: ${({ theme }) => theme.colorOmegaFixed };
            color: ${({ theme }) => theme.colorPsiFixed };
        }

        &.dark-btn {
            background-color: ${({ theme }) => theme.colorPsi };
            color: ${({ theme }) => theme.colorOmega };
        }
    }

    .button-bg:hover {
        background-color: ${({ theme }) => theme.colorTheta };
        color: ${({ theme }) => theme.colorOmegaFixed };

        &.light-btn {
            background-color: ${({ theme }) => theme.colorOmegaFixed };
            color: ${({ theme }) => theme.colorPsiFixed };
        }
    }

    .button-outline {
        border: 1px solid ${({ theme }) => theme.colorEpsilon };
        color: ${({ theme }) => theme.colorPsi };
        padding: 0.8rem 2rem;

        &.light-btn {
            border: 1px solid ${({ theme }) => theme.colorOmegaFixed };
            color: ${({ theme }) => theme.colorOmegaFixed };
        }
    }

    .button-outline:hover {
        background-color: ${({ theme }) => theme.colorPsi};
        color: ${({ theme }) => theme.colorOmega};

        &.light-btn {
            background-color: ${({ theme }) => theme.colorOmegaFixed };
            color: ${({ theme }) => theme.colorPsiFixed };
        }
    }

    .w-100 {
        width: 100%;
    }

    .w-400 {
        @media screen and ( min-width: 768px ) {
            max-width: 40rem;
        }
    }

    .w-700 {
        max-width: 70rem;
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .my-auto {
        margin-top: auto;
        margin-bottom: auto;
    }

    .section-margin {
        margin-bottom: calc( 6rem + 10vw );
        margin-top: calc( 6rem + 10vw );

        @media screen and ( min-width: 1200px ) {
            margin-bottom: 16rem;
            margin-top: 16rem;
        }
    }

    .section-margin-bottom {
        margin-bottom: calc( 6rem + 10vw );
    }

    .section-margin-top {
        margin-top: calc( 6rem + 10vw );
    }

    @media screen and ( min-width: 1200px ) {
        .section-margin-bottom {
            margin-bottom: 16rem;
        }

        .section-margin-top {
            margin-top: 16rem;
        }
    }

    .mt-10 {
        margin-top: 1rem;
    }

    .mt-20 {
        margin-top: 2rem;
    }

    .mt-30 {
        margin-top: 3rem;
    }

    .mt-alpha {
        margin-top: 6rem;
    }

    .mt-beta {
        margin-top: 10rem;
    }

    .mt-gamma {
        margin-top: 16rem;
    }

    .mb-10 {
        margin-bottom: 1rem;
    }

    .mb-20 {
        margin-bottom: 2rem;
    }

    .mb-30 {
        margin-bottom: 3rem;
    }

    .mb-alpha {
        margin-bottom: 6rem;
    }

    .mb-beta {
        margin-bottom: 10rem;
    }

    .mb-gamma {
        margin-bottom: 16rem;
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .pt-alpha {
        padding-top: 6rem;
    }

    .pt-beta {
        padding-top: 10rem;
    }

    .pb-alpha {
        padding-bottom: 6rem;
    }

    .pb-beta {
        padding-bottom: 10rem;
    }

    .section-padding {
        padding-bottom: calc( 3rem + 5vw );
        padding-top: calc( 3rem + 5vw );

        @media screen and ( min-width: 1200px ) {
            padding-bottom: 10rem;
            padding-top: 10rem;
        }
    }

    .border-radius-alpha {
        border-radius: var(--border-radius-alpha);
    }

    .border-radius-beta {
        border-radius: var(--border-radius-beta);
    }

    .border-radius-gamma {
        border-radius: var(--border-radius-gamma);
    }
`

export default Globals