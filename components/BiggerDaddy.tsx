'use client'
import postcss, { Root, Rule, Declaration } from "postcss"
import scss from "postcss-scss"
import { useState } from "react";


const css = `
.container {
	padding: 0px $text-spacer-xs !important;
}

.purchaseflow-gradient {
	&::before {
		content: '';
		background: linear-gradient(135deg, rgba(108, 203, 155, 0.1) 0%, rgba(72, 14, 17, 0.1) 100%);
		position: absolute;
		max-width: 100%;
		width: 100%;
		height: 100%;
		filter: blur(162px);
		will-change: transform;
		left: 0;
		top: 0;
		z-index: -1;
	}

	.btn-back {
		position: absolute;
		top: $text-spacer;
		left: 0;
	}
}

.py-16 {
	padding-top: rem(16);
	padding-bottom: rem(16);
}

.min-w-max-content {
	min-width: max-content;
}

.pfselect-wrapper {
	width: 100%;
	max-width: 732px;
	margin-left: auto;
	margin-right: auto;
	flex: 1;

	@include breakpoint-max(lg) {
		max-width: 100%;
	}
}
.new-tickets-page {
	padding-top: rem(32);
	padding-bottom: rem(300);
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	gap: rem(32);
	.sticky-content {
		width: 33.33%;
		position: sticky;
		top: 116px;
		display: flex;
		flex-direction: column;
		gap: rem(24);
	}
	.tickets_col {
		gap: rem(24);
		display: flex;
		flex-direction: column;
		width: 66.66%;
	}

	@include breakpoint-max(md) {
		padding-top: rem(16);
		flex-direction: column;
		gap: rem(16);
		.sticky-content {
			position: relative;
			top: unset;
			width: 100%;
		}
		.tickets_col {
			width: 100%;
			gap: rem(16);
		}
	}
}

.new-select-tickets {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: $text-spacer;
	position: relative;
	@include breakpoint-max(md) {
		padding-top: $text-spacer-xs;
		&--filter-open {
			padding-top: 0px;
		}
	}
	@include breakpoint-min(md) {
		.great-wrapper {
			margin-top: rem(24);
		}
		.collapse-inner {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
		}
	}

	.great-wrapper {
		flex: 1;
		@include breakpoint-max(md) {
			border: none;
			background-color: transparent;

			&--filter-open {
				background-color: $light;
			}

			.card-body--filter-open {
				padding: 0px;
			}
		}

		.tablet-desktop-only {
			font-family: $font-body;
			color: #000000;
			h5 {
				@extend .fs-md;
				@extend .fs-md-bold;
				line-height: 32px;
				margin-bottom: 0;
			}
			p {
				font-size: $small;
				line-height: 24px;
			}
		}

		.card-body {
			display: flex;
			flex-direction: column;
		}
	}

    .tickets-col {
        display: flex;
        flex-direction: column;
        gap: rem(8);
        @include breakpoint-max(md) {
            max-height: calc(100vh - 116px - 52.8px - 64px);
            overflow-y: scroll;
        }
    }

	.btn-group {
		// filter menu
		> .btn.btn-toggle {
			&--white {
				@extend .btn--white;

				&.num {
					width: 41px;
				}
			}

			// filter cards
			&--no-borders {
				border-color: transparent;
				justify-content: flex-start;
				padding-left: rem(8);
				padding-right: rem(8);
			}
		}

		.btn-check {
			&:not(:checked) {
				+ .btn,
				& + .btn:not(.selected) {
					background-color: #fff;
				}
			}
		}
		&.greyScale {
			$active-state-background: $gray-300;
			$active-state-borderColor: $light;
			$active-state-color: $body-color;

			.btn-check {
				&:checked {
					& + .btn {
						background-color: $active-state-background;
						border-color: $active-state-borderColor;
						color: $active-state-color;
					}
				}
			}

			.btn.active {
				background-color: $active-state-background;
				border-color: $active-state-borderColor;
				color: $active-state-color;
			}
		}
	}
}
.new-checkout-page {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: rem(32);
	position: relative;
	@include breakpoint-max(md) {
		margin-top: 0;
	}
	@include breakpoint-min(md) {
		.collapse-inner {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
		}
	}

	.great-wrapper {
		display: flex;
		flex-direction: column;
		gap: rem(16);
		.g-texts {
			font-family: $font-body;
			color: #000000;
			h5 {
				@extend .fs-md;
				@extend .fs-md-bold;
				line-height: 32px;
				margin-bottom: 0;
			}
			p {
				font-size: $small;
				line-height: 24px;
			}
			@include breakpoint-max(sm) {
				h5 {
					font-size: $body-2;
					line-height: 24px;
					margin-top: rem(8);
				}
			}
		}
	}
}
.--tslider {
	.swiper {
		.swiper-slide {
			img {
				// Dimesions still fucked
				width: 100%;
				max-height: 430px;
			}
		}
	}
	.button-box {
		position: absolute;
		width: 100%;
		left: 0;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		display: flex;
		justify-content: space-between;
		.btn--icon {
			padding: rem(16);
			background-color: rgba(255, 255, 255, 0.8);
			height: auto;
			width: auto;
			border: none;
			img {
				height: 24px;
				width: 24px;
			}
			&.--left {
				border-radius: 16px;
			}
			&.--right {
				border-radius: 16px;
				img {
					transform: rotate(180deg);
				}
			}
		}
	}

	@include breakpoint-max(md) {
		.swiper {
			.swiper-slide {
				img {
					// Dimesions still fucked
					max-height: 230px;
				}
			}
		}
	}
}

.abcvenue_section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .venue_container {
        display: flex;
        flex-direction: column;
        gap: rem(24);
        margin-bottom: $text-spacer-xs;
        width: 100%;

        @include breakpoint-min(md) {
            flex-direction: row;
        }

        .venue_img {
            width: 120px;
            height: 88px;
            object-fit: cover;
            border-radius: 12px;
        }
        .venue_info {
            flex: 1;
        }
    }

    .venue_ac {
        width: 100%;
        .accordion_container {
            display: flex;
            flex-direction: column;
            will-change: transform;
            gap: rem(16);
            .accordion-item {
                border-radius: 16px;
                background-color: transparent;
                border: border(2px, $info); // Neutrals/7
            }
            .accordion-button {
                @extend .normal;
                @extend .normal-bold;
                line-height: 24px;
                font-style: normal;
                padding: rem(16);
                @include breakpoint-min(sm) {
                    font-weight: $fw-bold;
                    text-transform: uppercase;
                    line-height: 16px;
                    padding: rem(24);
                }
                &[aria-expanded="true"] {
                    &::after {
                        transform: rotate(180deg);
                    }
                }

                &::after {
                    width: 1.25em;
                    line-height: 0;
                    content: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM7 7L6.29289 7.70711C6.68342 8.09763 7.31658 8.09763 7.70711 7.70711L7 7ZM13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L13.7071 1.70711ZM0.292893 1.70711L6.29289 7.70711L7.70711 6.29289L1.70711 0.292893L0.292893 1.70711ZM7.70711 7.70711L13.7071 1.70711L12.2929 0.292893L6.29289 6.29289L7.70711 7.70711Z' fill='%236F767E'/%3E%3C/svg%3E%0A");
                    transition: transform .35s ease;
                    margin-left: auto;
                }
            }
            .accordion-body {
                font-family: $font-body;
                font-size: $body-2;
                font-style: normal;
                font-weight: $fw-normal;
                line-height: 24px;
                color: $clr-neutral-3; // Neutrals/3
                padding-left: rem(16);
                padding-right: rem(16);
                padding-bottom: rem(16);
                @include breakpoint-min(sm) {
                    padding-left: rem(24);
                    padding-right: rem(24);
                    padding-bottom: rem(24);
                }
            }
        }
    }
}

.--tinfo {
	p {
		font-size: $small;
		line-height: 24px;
	}
}

.select_ticket {
    width: 100%;
    border-radius: 16px;
    background-color: #ffffff;
    border: border();
    padding: $text-spacer-xs;
    display: flex;
    flex-direction: column;
    font-family: $font-body;
    &.open {
        border-color: $secondary;
    }
    .ticket-inner {
        display: flex;
        flex-direction: row;
        justify-items: flex-start;
        align-items: start;
        width: 100%;
        gap: rem(16);
        .img-wrap {
            position: relative;
            overflow: hidden;
            display: inline-block;
            padding: 0;
            border: none;
            outline: none;
            border-radius: 8px;
            .ticket-view {
                width: 98px;
                height: 98px;
                border-radius: 8px;
                @include breakpoint-min(md) {
                    width: 123px;
                    height: 92px;
                }
            }
        }
        .img-wrap:hover {
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 24px;
                height: 24px;
                background: url('../../../../assets/icons/fullscreen.svg') no-repeat center center;
                background-size: cover;
                z-index: 1;
            }
            .ticket-view {
                filter: brightness(70%);
            }
        }
        .ticket-info {
            font-family: $font-body;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-items: flex-start;
            align-items: start;
            color: $body-color;

            > * {
                line-height: 24px;
            }
            @include breakpoint-min(md) {
                flex-direction: row;
                justify-content: space-between;
            }

            .ticket-badge {
                @include breakpoint-min(md) {
                    margin-bottom: rem(8);
                }
            }
            .ticket-spot {
                @extend .normal;
                @extend .normal-bold;
                margin-bottom: rem(2);
            }
            .ticket-t {
                font-weight: $fw-normal;
                color: $text-muted;
                font-size: $small;
            }
            .ticket-price {
                @extend .normal;
                @extend .normal-bold;
            }
            .ticket-including {
                color: $text-muted; // n4
                font-size: $caption;
            }

            .tablet-desktop-only {
                width: 100%;
                .tickets-desktop {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: row;
                    gap: rem(16);
                    .col-one {
                        white-space: normal;
                        text-align: start;
                        .ticket-spot {
                            @extend .normal;
                            @extend .normal-bold;
                            line-height: 24px;
                            margin-bottom: rem(8);
                            display: flex;
                            flex-direction: row;
                            align-items: flex-start;
                            gap: $gap-xs;
                        }
                        .ticket-t {
                            font-weight: $fw-normal;
                            color: #141416; // n1
                            font-size: $small;
                            line-height: 24px;
                        }
                    }
                    .col-two {
                        text-align: end;
                    }
                }
            }
            .mobile-only {
                white-space: normal;
                text-align: start;
                .ticket-price {
                    @extend .small;
                    @extend .small-bold;
                    line-height: 24px;
                    span {
                        font-size: $caption;
                        line-height: 20px;
                        color: $text-muted; // Neutrals/4
                    }
                }
                .ticket-loc {
                    @extend .small;
                    @extend .small-bold;
                    line-height: 24px;
                }
                .ticket-t {
                    font-weight: $fw-normal;
                    font-size: $small;
                    line-height: 24px;
                    color: $text-muted; // Neutrals/4
                }
            }
        }
    }

    // Wrappers improve collapse performance
    .collapse-container {
        width: 100%;
        .collapse-inner {
            width: 100%;
            .collapse-top {
                margin-top: $text-spacer-xs;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                gap: rem(16);
                .form-select {
                    border-radius: 90px;
                    max-width: 150px;
                }
                .btn {
                    margin-top: 0;
                }

                // Move media queries to one location
                @include breakpoint-max(sm) {
                    justify-content: space-between;
                }
            }
            .collapse-bottom {
                margin-top: $text-spacer-xs;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap: $gap-sm;
            }
        }
    }
}


.checkout_ticket {
    width: 100%;
    border-radius: 16px;
    background-color: #ffffff;
    border: border(); // Neutrals/6
    padding: rem(16);
    display: flex;
    flex-direction: column;
    font-family: $font-body;
    &.open {
        border: border($color: $secondary);
    }
    .ticket-inner {
        display: flex;
        flex-direction: row;
        justify-items: flex-start;
        align-items: start;
        width: 100%;
        gap: rem(16);
        .img-wrap {
            position: relative;
            overflow: hidden;
            display: inline-block;
            padding: 0;
            border: none;
            outline: none;
            .ticket-view {
                width: 98px;
                height: 98px;
                border-radius: 8px;
                @include breakpoint-min(md) {
                    width: 139px;
                    height: 104px;
                }
            }
        }
        .img-wrap:hover {
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 24px;
                height: 24px;
                background: url('../../../../assets/icons/fullscreen.svg') no-repeat center center;
                background-size: cover;
                z-index: 1;
            }
            .ticket-view {
                filter: brightness(70%);
            }
        }
        .ticket-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-items: flex-start;
            align-items: start;

            .tablet-desktop-only {
                width: 100%;
                .tickets-desktop {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: row;
                    .col-one {
                        font-family: poppins;
                        text-align: start;
                        .ticket-badge {
                            margin-bottom: rem(8);
                        }
                        .ticket-spot {
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 24px;
                            color: #23262f; // n2
                            margin-bottom: rem(2);
                        }
                        .ticket-t {
                            font-weight: 400;
                            color: #777e90; // n4
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }
                    .col-two {
                        font-family: poppins;
                        text-align: end;
                        .ticket-limit {
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 24px;
                            color: #141416; // n1
                            span {
                                font-weight: 500;
                            }
                        }
                        .ticket-price {
                            color: #23262f; // n2
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 24px;
                        }
                        .ticket-including {
                            color: #777e90; // n4
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 20px;
                        }
                    }
                }
            }
            .mobile-only {
                text-align: start;
                .ticket-badge {
                    background-color: rgba(69, 178, 107, 0.12);
                    border-radius: 8px;
                    padding: 4px 8px;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 20px;
                    color: #45b26b; // primary 4
                }
                .ticket-price {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 24px;
                    color: #23262f; // Neutrals/2
                    span {
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 20px;
                        color: #777e90; // Neutrals/4
                    }
                }
                .ticket-loc {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 24px;
                    color: #23262f;
                }
                .ticket-t {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 24px;
                    color: #777e90; // Neutrals/4
                }
            }
        }
    }

    // Wrappers improve collapse performance
    .collapse-container {
        width: 100%;
        .collapse-inner {
            width: 100%;
            .collapse-top {
                margin-top: 16px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 16px;
                .btn {
                    margin-top: 0;
                }
            }
            .collapse-bottom {
                margin-top: 16px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap: 10px;
                img {
                    height: 20px;
                }
                p {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 24px;
                    color: #777e90; // Neutrals/4
                }
            }
        }
    }
}

.price-slider {
	padding: 0px rem(12);
}

.checkout-payment {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: poppins;

    h4 {
        @extend .normal;
        @extend .normal-bold;
        line-height: 24px;
        margin-bottom: rem(4);
    }
    p {
        font-size: $small;
        line-height: 24px;
    }

    .card-form {
        width: 100%;
    }
}
.map-filter {
	display: flex;
	flex-direction: column;
	gap: gap(16);
	.map-bb {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		gap: rem(12);
		margin-top: $text-spacer-xs;

		h6 {
			font-weight: $fw-normal;
			font-size: $small;
			line-height: 24px;
			color: black;
			margin-bottom: 0px;
		}
		div {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
		@include breakpoint-max(md) {
			flex-direction: column;
			align-items: flex-start;
		}
	}
}

.main_description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .desc_badge {
        line-height: 20px;
        margin-bottom: $text-spacer-xs;
    }

    .display-1 {
        color: black;
        @extend .fs-md;
        @extend .fs-md-bold;
        line-height: 32px;
        font-family: $font-heading-alt;
    }
    .event-venue {
        line-height: $body-1;
        margin-bottom: rem(8);
    }

    @include breakpoint-min(md) {
        .display-1 {
            font-size: rem(40);
            line-height: 48px;
        }
        .event-venue {
            line-height: 32px;
        }
        .card-text {
            font-size: $body-1;
            line-height: 32px;
        }
    }
    @include breakpoint-min(xl) {
        .display-1 {
            font-size: rem(56);
            line-height: 56px;
        }
    }
}

.abclineup {
    .lineup_container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: rem(16);
        .performer {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: rem(8);
            overflow: hidden;
            img {
                height: 40px;
                width: 40px;
                border-radius: 50%;
            }
        }
    }
}

.get_presale {
	.presale_desc {
		padding-top: rem(24);
		h5 {
			font-weight: $fw-bold;
			font-size: $body-2;
			line-height: 16px;
			color: #000000;
		}
		p {
			font-weight: $fw-normal;
			font-size: $small;
			line-height: 24px;
			color: $clr-neutral-3;
			@include multi-line-truncate(6);
		}
	}
}
.get_presale_desktop {
	.card-body {
		width: 100%;
	}
	.soldout_icon {
		padding-bottom: rem(16);
		width: 80px;
	}
	.presale_heading {
		font-weight: $fw-semi-bold;
		font-size: $body-1;
		line-height: 32px;
		color: black;
		margin-bottom: rem(4);
	}
	.presale_info {
		font-weight: $fw-normal;
		font-size: $body-2;
		line-height: 24px;
		color: black;
	}
	.get_presale_inner {
		margin-top: $text-spacer-xs;
		border-radius: $border-radius;
		border: border(); // neutral 6
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: rem(8) rem(12);
		gap: rem(16);
		.presale_input {
			flex: 1;
			height: 100%;
			border: none;
			outline: none;
			background-color: transparent;
			font-weight: $fw-normal;
			font-size: $body-2;
			line-height: 24px;
			// color: #353945; // neutral 3 // color has not been specified in design
		}
		.presale_input::placeholder {
			color: $input-placeholder-color; // neutral 4
		}
		.presale_input::-ms-input-placeholder {
			color: $input-placeholder-color; // neutral 4
		}
	}

	.get_presale_inner:focus-within {
		border-color: $input-focus-border-color; // this has not been specified in design
	}

	.incorrect {
		border-color: $danger; // Primary/3
		color: $danger;
	}

	.presale_incorrect {
		margin-top: $text-spacer-xs;
	}
}

.get_presale_mobile {
	flex-direction: column;
	.mob_layout {
		width: 100%;
		display: flex;
		flex-direction: column;
		.presale_heading {
			font-weight: $fw-semi-bold;
			font-size: $body-2;
			line-height: 24px;
			color: black;
			margin-bottom: rem(4);
		}
		.presale_info {
			font-weight: $fw-normal;
			font-size: $body-2;
			line-height: 24px;
			color: black;
		}
		.presale_input {
			margin-top: rem(8);
			padding: rem(16) rem(18);
			border-radius: $border-radius;
			border: border(); // neutral 6
			background-color: $white;
			flex: 1;
			height: 100%;
			outline: none;
			font-weight: $fw-normal;
			font-size: $body-2;
			line-height: 24px;
			margin-bottom: rem(8);
		}
		.presale_input::placeholder {
			color: $input-placeholder-color; // neutral 4
		}
		.presale_input::-ms-input-placeholder {
			color: $input-placeholder-color; // neutral 4
		}
		.presale_input:focus-within {
			border-color: $input-focus-border-color; // this has not been specified in design
		}

		.incorrect {
			border-color: $danger; // Primary/3
			color: $danger;
		}
	}
	.soldout_icon {
		padding-bottom: rem(16);
		width: 70px;
	}
}

.get_mobile_normal {
    background-color: rgba(255, 255, 255, 0.54); // Neutrals 8
    border: 2px solid white; // Neutrals 6
    border-radius: 20px;
    padding: rem(24);
    display: flex;
    @include breakpoint-min(sm) {
        display: none;
    }
}

.get_mobile_fixed {
    display: flex;
    background-color: $white; // Neutrals 8
    border: border();
    padding: rem(16) rem(24);
    border-top-right-radius: $border-radius;
    border-top-left-radius: $border-radius;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    box-shadow: 0px 4px 64px 0px #0000001C;
    @include breakpoint-min(sm) {
        display: none;
    }
}

.get_desktop {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 2px solid white;
    @include breakpoint-max(sm) {
        display: none !important;
    }
}
.get_tickets_desktop {
	.card-body {
		width: 100%;
	}

	.get_tickets_inner {
		border-radius: 16px;
		border: border(); // neutral 6
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: rem(8);
		width: 100%;
		padding: rem(16) rem(12) rem(16) rem(20);

		.coll {
			display: flex;
			flex-direction: column;
			gap: $gap-xs;
			p {
				font-size: rem(20);
				line-height: 24px;
				font-family: poppins; // this is supposed to be work sans
				font-weight: $fw-bold;
				margin-bottom: 0px;
			}
			span {
				color: $text-muted;
				font-size: $caption;
			}
		}
	}
}


.get_tickets_mobile {
    flex-direction: row;
    justify-content: space-between;
    p {
        font-weight: $fw-bold;
        font-size: rem(20);
        line-height: 24px;
    }
    span {
        font-size: $caption;
        line-height: 20px;
        color: $text-muted; // neutral 4
    }
}

.select_get_soldout {
    justify-content: center;
    align-items: center;
    text-align: center;
    .card-body {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}

.filter-panel {
	@include breakpoint-max(md) {
		@include full-width();
		position: absolute;
		top: 0px;
		bottom: 0px;
		background-color: $light;
		padding: $text-spacer-xs;
	}

	.filter-card {
		flex: 1;
		min-height: 0px; // makes filter card scrollable
		@include breakpoint-min(md) {
			margin-top: $text-spacer-xs;
		}

		.card-body {
			display: flex;
			flex-direction: column;

			@include breakpoint-max(md) {
				padding-left: $text-spacer-xs;
				padding-right: $text-spacer-xs;
			}
		}
	}

	.filter-list {
		gap: $text-spacer;

		@include breakpoint-max(md) {
			@include scrollable();
		}

		li {
			list-style: none;

			.filter-heading {
				display: block;
				@extend .small !optional;
				@extend .small-bold !optional;
				color: $text-muted;
				margin-bottom: rem(12);
			}

			&.offers-item {
				display: flex;
				flex-direction: column;
				height: 100%;
				@include breakpoint-min(md) {
					max-height: 36vh;
				}

				.accessibility-container {
					padding-bottom: rem(12);
					margin-bottom: rem(10);
					border-bottom: border();
				}

				.accessibility {
					@extend %icon-text-box;
					gap: $gap-sm;
					&::before {
						content: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.54203 3.64795C6.50403 3.64795 7.27803 2.86595 7.27803 1.92395C7.27803 0.967951 6.50403 0.199951 5.54203 0.199951C4.58403 0.199951 3.80603 0.967951 3.80603 1.92395C3.80603 2.86595 4.58403 3.64795 5.54203 3.64795ZM15.73 15.442L12.77 10.368C12.586 10.062 12.264 9.88995 11.93 9.87995H7.58603L7.54203 8.35395H10.696C11.126 8.32795 11.48 8.00395 11.48 7.56595C11.48 7.13395 11.136 6.79795 10.696 6.78395H7.45403L7.34203 5.52795C7.27803 4.62395 6.49403 3.91195 5.57403 3.96195C4.64603 4.01395 3.94603 4.80595 3.99003 5.72195L4.29603 10.954C4.37203 11.872 5.14403 12.522 6.06003 12.522H11.69L13.99 16.476C14.266 16.924 14.904 17.108 15.384 16.822C15.858 16.534 16 15.942 15.73 15.442ZM6.65803 18.444C3.81003 18.444 1.50003 16.156 1.50003 13.324C1.50003 11.774 2.20803 10.39 3.31003 9.44795L3.21403 7.84795C1.37003 8.99195 0.134033 11.002 0.134033 13.324C0.134033 16.9 3.05203 19.802 6.65803 19.802C9.31203 19.802 11.58 18.216 12.6 15.96L11.684 14.38C11.192 16.694 9.13603 18.444 6.65803 18.444Z' fill='%23777E91'/%3E%3C/svg%3E%0A");
					}
				}

				.offers-list {
					@include scrollable-padding();

					@include breakpoint-min(md) {
						@include scrollable();
					}
				}

				.offer-desc {
					color: $text-muted;
					padding-left: calc($form-check-input-width + em(16));
					padding-bottom: rem(8);
				}
			}
		}
	}

	.footer {
		border-top: border();
		padding-top: $text-spacer-sm;
		margin-top: rem(8);
	}
}

.abcfloating-card {
    padding: rem(16);
    &--quantity {
        width: 176px;
        height: 272px;
        margin-left: calc(rem(60) + rem(8));

        .card {
            height: 100%;

            &-body {
                padding: rem(8) 0px;
                height: 100%;

                .btn-group {
                    padding: 0px rem(8);
                }
            }
        }
    }

    &--price {
        width: 564px;
        height: 391px;
        margin-left: calc(rem(130) + rem(8));
    }
}

.abcsort-btn {
    color: $clr-neutral-3;
    gap: rem(8);
    font-family: $font-body;
    font-weight: $fw-medium;
    &::before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M7 5C7 4.44772 6.55228 4 6 4C5.44772 4 5 4.44772 5 5V17.0858L3.70711 15.7929C3.31658 15.4024 2.68342 15.4024 2.29289 15.7929C1.90237 16.1834 1.90237 16.8166 2.29289 17.2071L4.58579 19.5C5.36683 20.281 6.63316 20.281 7.41421 19.5L9.70711 17.2071C10.0976 16.8166 10.0976 16.1834 9.70711 15.7929C9.31658 15.4024 8.68342 15.4024 8.29289 15.7929L7 17.0858V5Z' fill='%23777E91'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 7C12 6.44772 12.4477 6 13 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H13C12.4477 8 12 7.55228 12 7Z' fill='%23777E91'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 12C12 12.5523 12.4477 13 13 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13C12.4477 11 12 11.4477 12 12Z' fill='%23777E91'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H13C12.4477 16 12 16.4477 12 17Z' fill='%23777E91'/%3E%3C/svg%3E");
    }
}

.purchaseFlow-event {
	position: relative;
	@include breakpoint-min(md) {
		padding-top: 0;
	}

	.event-container {
		&.card {
			.card-title {
				line-height: 24px;
				margin-bottom: rem(4);
			}
		}
		@include breakpoint-max(md) {
			&.card {
				border: none;
				background-color: transparent;

				.card-body {
					padding: 0px;

					.card-title {
						font-size: $small;
						font-weight: $fw-medium;
					}
				}
			}
		}
	}

	.event-image {
		&-wrapper {
			flex-shrink: 0;
		}

		& {
			border-radius: 16px;
		}
	}

	.details {
		font-weight: $fw-normal;
		flex-grow: 1;
		min-width: 0;
		color: #000000;
		font-size: $body-2;

		.venue-info {
			color: #3e8bf7; // Secondary 1
		}

		.event-p {
			color: #353945; // neutrals 3
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			padding-bottom: 8px;
		}

		.hstack {
			font-weight: 400;
			font-size: $caption;
		}
		@include breakpoint-min(md) {
			.hstack {
				font-size: $body-2;
			}
		}
	}

	#event-info {
		margin-left: auto;
		margin-right: 2px;
		@include breakpoint-min(md) {
			border-color: $light;
			color: $muted;

			svg {
				width: 16px;
			}
		}

		@include breakpoint-max(md) {
			padding: 0px;
		}
	}
}

#countdown {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: $gap;

	&::before {
		content: '';
		@extend %img-background;
		background-image: url($data-svg-prefix + map-get($icons, 'ticket'));
		background-color: rgba($primary, 0.1);
		background-size: 18px;
		width: 44px;
		height: 44px;
		border-radius: border.$border-radius-sm;
	}

	#countdown-timer {
		background-color: $gray-300;
		border-radius: border.$border-radius;
		padding: rem(12) 0px;
		width: 100%;
		font-size: $caption;

		.vstack {
			place-items: center;
			position: relative;
			flex: 0 0 81px;

			&:not(:last-child) {
				&::after {
					content: ':';
					position: absolute;
					right: -4px;
					top: 15%;
					font-size: $body-1;
					font-weight: $fw-bold;
				}
			}
		}

		.ticker {
			font-size: $h3-font-size;
			font-family: $font-heading;
			width: 100%;
			text-align: center;
		}
	}
}

.buying-this {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: rem(24);
    font-family: $font-body;
    img {
        width: 123px;
        height: 92px;
        border-radius: 8px;
    }
    @include breakpoint-max(sm) {
        img {
            width: 112px;
            height: 84px;
        }
        padding: rem(16);
        gap: rem(16);
    }
    .mobile-only {
        width: 100%;
        font-weight: $fw-normal;
        font-size: $small;
        line-height: 24px;
        // color: #353945;
    }
    .right-side {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        .coll {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            font-family: $font-body;
            .ticket-badge {
                margin-bottom: rem(8);
            }
            h3 {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: $gap-xs;
                @extend .normal;
                @extend .normal-bold;
                line-height: 24px;
                margin-bottom: rem(8);
            }
            @include breakpoint-max(sm) {
                h3 {
                    font-size: $small;
                    $font-weight: $fw-semi-bold;
                    margin-bottom: rem(4);
                }
                .ticket-badge {
                    margin-bottom: rem(4);
                }
            }
            p {
                font-size: $small;
                line-height: 24px;
            }
        }
        .ticket-count-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: $font-body;
            .ticket-count {
                @extend .fs-md;
                @extend .fs-md-bold;
                line-height: 32px;
            }
            .ticket-text {
                font-weight: $fw-normal;
                font-size: $body-2;
                line-height: 24px;
            }
        }
        .form-select {
            max-width: 180px;
        }
    }
}

.abcbanner_image {
    width: 100%;
    border-radius: rem(16);
    background-color: rgba(255, 255, 255, 0.54);
    padding-bottom: 100%;
    position: relative;
    .banner_inner {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .banner_img {
            border-radius: rem(16);
            height: 100%;
            width: 100%;
        }
    }
}

.additional_info {
	.card-body {
		display: flex;
		flex-direction: column;
		gap: rem(16);
	}

	.information_container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		gap: rem(8);

		&.qrcode {
			&::before {
				content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M10.6789 2.00003H4.32124C3.59167 2.00003 3.00003 2.59139 3.00003 3.3212V9.67894C3.00003 10.4088 3.59167 11.0001 4.32124 11.0001H10.6789C11.4085 11.0001 12.0001 10.4088 12.0001 9.67894V3.3212C12.0001 2.59139 11.4085 2.00003 10.6789 2.00003Z' fill='%233E8BF7'/%3E%3Cpath d='M20.679 12.0002H14.3214C13.5918 12.0002 13.0002 12.5915 13.0002 13.3213V19.6791C13.0002 20.4089 13.5918 21.0002 14.3214 21.0002H20.679C21.4086 21.0002 22.0002 20.4089 22.0002 19.6791V13.3213C22.0002 12.5915 21.4086 12.0002 20.679 12.0002Z' fill='%233E8BF7'/%3E%3Cpath d='M8.73012 18.4132H5.53997V15.2936C5.53997 14.5791 4.97127 14.0002 4.27 14.0002C3.56872 14.0002 3.00003 14.5791 3.00003 15.2936V19.7069C3.00003 20.4213 3.56872 21.0002 4.27 21.0002H8.73012C9.4314 21.0002 10.0001 20.4213 10.0001 19.7069C10.0001 18.9924 9.4314 18.4132 8.73012 18.4132Z' fill='%233E8BF7'/%3E%3Cpath d='M20.679 2.00003H14.3214C13.5918 2.00003 13.0002 2.59139 13.0002 3.3212V9.67894C13.0002 10.4088 13.5918 11.0001 14.3214 11.0001H20.679C21.4086 11.0001 22.0002 10.4088 22.0002 9.67894V3.3212C22.0002 2.59139 21.4089 2.00003 20.679 2.00003ZM19.3578 8.35777H15.6426V4.64237H19.3578V8.35777Z' fill='%233E8BF7'/%3E%3C/svg%3E");
			}
		}

		&.protection {
			&::before {
				content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.05132 3.81624C3.82629 4.22458 3 5.371 3 6.66229V12C3 17.502 8.56019 20.8417 10.9399 22.0192C11.6125 22.3519 12.3875 22.3519 13.0601 22.0192C15.4398 20.8417 21 17.502 21 12V6.66229C21 5.371 20.1737 4.22459 18.9487 3.81624L12.9487 1.81624C12.3329 1.61098 11.6671 1.61098 11.0513 1.81624L5.05132 3.81624ZM15.7071 10.7071C16.0976 10.3166 16.0976 9.68342 15.7071 9.29289C15.3166 8.90237 14.6834 8.90237 14.2929 9.29289L11 12.5858L9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L9.72721 14.1414C10.4302 14.8444 11.5698 14.8444 12.2728 14.1414L15.7071 10.7071Z' fill='%2345B36B'/%3E%3C/svg%3E");
			}
		}

		.ic_inner {
			display: flex;
			flex-direction: column;
			gap: $gap-xs;
			.card-title {
				line-height: 24px;
				margin-bottom: 0px;
			}
		}
	}
}

.about_section {
	.about_text {
		-webkit-box-orient: vertical;

		&.clamp_text {
			@include multi-line-truncate(4);
		}
	}
	.full_text {
		-webkit-line-clamp: initial; /* Show all lines when expanded */
	}
	.btn-show {
		margin-top: rem(4);
		font-size: $body-2;
		line-height: 24px;
		color: $clr-neutral-3; // Neutrals/3
	}
}
`;

function formatCSS(css: string): string {
    return css.replace(/({|;)\s*/g, '$1\n    ')
              .replace(/}\s*/g, '}\n\n')
              .replace(/\n    }/g, '\n}');
}

async function refactorCSS(inputCss: string): Promise<string> {
    const root: Root = scss.parse(inputCss);
    let styleOccurrences: Record<string, Set<string>> = {};

    // Walk through each rule and consider only the deepest selector
    root.walkRules((rule: Rule) => {
        const deepestSelector = rule.selector.split(' ').pop(); // Get the deepest selector part

        // Walk through each node, and consider only the declarations
        rule.nodes.map((node: any) => {
            if (node.type !== 'decl') return;
            const decl: Declaration = node as Declaration;
            const propVal: string = `${decl.prop}: ${decl.value}`;

            if (!styleOccurrences[propVal]) {
                styleOccurrences[propVal] = new Set();
            }

            if (deepestSelector) {
                styleOccurrences[propVal].add(deepestSelector);
            }
        });
    });

    console.log('### styleOccurrences:', styleOccurrences)
    let sharedStylesBySelectorGroup: Record<string, Set<string>> = {};

    // First, group all selectors that share the same style
    Object.entries(styleOccurrences).forEach(([style, selectors]) => {
        if (selectors.size > 1) { // Consider only styles shared by more than one selector
            const selectorKey = Array.from(selectors).sort().join(', ');
            if (!sharedStylesBySelectorGroup[selectorKey]) {
                sharedStylesBySelectorGroup[selectorKey] = new Set();
            }
            sharedStylesBySelectorGroup[selectorKey].add(style);
        }
    });

    console.log('### sharedStylesBySelectorGroup:', sharedStylesBySelectorGroup);
    type SelectorStyles = Record<string, string[]>;
    type SelectorOccurrences = Record<string, SelectorStyles>;


    let selectorOccurrences: SelectorOccurrences = {};

    Object.keys(sharedStylesBySelectorGroup).forEach(selectors => {
        const selectorList = selectors.split(', ').map(selector => selector.trim());
        const countedPairs = new Set<string>(); // Set to keep track of counted pairs
    
        selectorList.forEach(selector => {
            if (!selectorOccurrences[selector]) {
                selectorOccurrences[selector] = {};
            }
    
            selectorList.forEach(otherSelector => {
                if (otherSelector !== selector) {
                    const pair = [selector, otherSelector].sort().join(', '); // Sort to ensure unique pair regardless of order
    
                    if (!countedPairs.has(pair)) { // Check if this pair has already been counted in this group
                        countedPairs.add(pair);
    
                        if (!selectorOccurrences[selector][otherSelector]) {
                            selectorOccurrences[selector][otherSelector] = [];
                        }
    
                        sharedStylesBySelectorGroup[selectors].forEach(style => {
                            if (!selectorOccurrences[selector][otherSelector].includes(style)) {
                                selectorOccurrences[selector][otherSelector].push(style);
                            }
                        });
                    }
                }
            });
        });
    });

    console.log('### selectorOccurrences:', selectorOccurrences);
    let newClasses = '';
    type StyleScore = {
        score: number;
        styles: string[];
    };
    type CalculatedScores = Record<string, StyleScore[]>;
    
    let topScores: StyleScore[] = [];
    let calculatedScores: CalculatedScores = {};
    
    Object.keys(selectorOccurrences).forEach(parentSelector => {
        let scoreDetails: StyleScore[] = [];
        let childSelectors = Object.entries(selectorOccurrences[parentSelector]);
    
        // Sort child selectors by the length of their style arrays in descending order
        childSelectors.sort((a, b) => b[1].length - a[1].length);
    
        childSelectors.forEach(([childSelector, styles], index) => {
            if (styles.length < 2) return; // Skip arrays with less than 2 elements
    
            // Check if styles array already in topScores
            const existingTopScoreIndex = topScores.findIndex(ts => ts.styles.length === styles.length && ts.styles.every((style, idx) => style === styles[idx]));
            if (existingTopScoreIndex !== -1) {
                topScores[existingTopScoreIndex].score++;
                console.log(`Array already in top scores for selector '${parentSelector}', score incremented ${childSelector}`);
                return;
            }
    
            let originalNumber = 1;
            // Check for matching style arrays in remaining child selectors
            for (let i = index + 1; i < childSelectors.length; i++) {
                let [nextChildSelector, nextStyles] = childSelectors[i];
                if (styles.length === nextStyles.length && styles.every((style, idx) => style === nextStyles[idx])) {
                    originalNumber++;
                }
            }
    
            let score = originalNumber * styles.length;
            scoreDetails.push({ score, styles });
    
            // Optional: Remove matching entries to avoid recounting
            childSelectors = childSelectors.filter(([sel, st]) => !(st.length === styles.length && st.every((style, idx) => style === styles[idx])));
        });
    
        // Find the maximum score in scoreDetails and add it to topScores
        if (scoreDetails.length > 0) {
            let maxScoreDetail = scoreDetails.reduce((max, current) => (current.score > max.score) ? current : max);
            topScores.push(maxScoreDetail);
        }
    
        calculatedScores[parentSelector] = scoreDetails;
    });
    console.log('### topScores:', topScores);
    console.log('### calculatedScores:', calculatedScores);
    // Object.entries(selectorOccurrences).forEach(([pair, styles], index) => {
    //     if (styles.size >= 2) { // Check if the pair has at least two shared styles
    //         const className = `refactored-class-${index + 1}`;
    //         newClasses += `/* Shared by: ${pair} */\n.${className} { ${Array.from(styles).join('; ')}; }\n`;
    //     }
    // });

    return formatCSS(newClasses + '\n');
}

export default function BiggerDaddy() {
    const [text, setText] = useState("");

    const refactorCss = async () => {
        const refactoredCSS = await refactorCSS(css);
        setText(refactoredCSS);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-3xl">
            <div className="p-5 w-full max-w-xl bg-indigo-900 rounded-lg flex gap-4 flex-col">  
                <button onClick={refactorCss} className="px-8 py-3 bg-white rounded-lg text-black active:scale-95">refactor</button>
            </div>
            <textarea value={text} readOnly className="w-full min-h-screen bg-white text-black rounded-md p-3" />
        </div>
    )
}