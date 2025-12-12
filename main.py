def on_on_chat():
    player.say(agent.get_orientation())
player.on_chat("agent get {dir}", on_on_chat)

def on_on_chat2():
    player.say(agent.get_position())
player.on_chat("agent get {pos}", on_on_chat2)

def on_on_chat3():
    agent.teleport_to_player()
player.on_chat("?follow {me}", on_on_chat3)

agent.teleport_to_player()