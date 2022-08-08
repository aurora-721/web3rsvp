import { BigInt } from "@graphprotocol/graph-ts"
import {
  ConfirmedAttendee,
  NewEventCreated,
  NewRSVP,
  DepositsPaidOut,
} from "../generated/mumbaiRSVPeventContract/mumbaiRSVPeventContract"
import { Account, RSVP, Confirmation, Event } from "../generated/schema";
import { integer } from "@protofire/subgraph-toolkit";

export function handleNewEventCreated(event: NewEventCreated): void {}

export function handleNewRSVP(event: NewRSVP): void {}

export function handleConfirmedAttendee(event: ConfirmedAttendee): void {}

export function handleDepositsPaidOut(event: DepositsPaidOut): void {}