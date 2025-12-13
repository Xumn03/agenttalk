def on_on_chat():
    agent.set_assist(PLACE_ON_MOVE, True)
player.on_chat("agent defprop PLACE_ON_MOVE true", on_on_chat)

def on_on_chat2():
    for index in range(100):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
player.on_chat("chicken", on_on_chat2)

def on_on_chat3():
    loops.pause(100)
    player.say(agent.get_position())
player.on_chat("agent get position", on_on_chat3)

def on_on_chat4():
    loops.pause(100)
    agent.teleport_to_player()
    agent.move(FORWARD, 5)
player.on_chat("agent follow me", on_on_chat4)

def on_on_chat5():
    player.say("Lista de comandos completa:")
    loops.pause(100)
    agent.teleport_to_player()
    player.say("1: agent")
    player.say("2: agent follow me")
    player.say("3: agent get position")
    player.say("4: agent defprop put-block-in-movement true")
player.on_chat("agent help", on_on_chat5)

# AgentTalk e seus afiliados são propriedade intelectual da Wave Technologies LTDA e da Microsoft Corporation e não podem ser vendidos sem a devida autorização.

def on_on_chat6():
    agent.teleport_to_player()
    player.say("Digite \"agent help\" para uma lista completa de comandos do AgentTalk")
player.on_chat("agent", on_on_chat6)

"""

©2026 Wave Technologies LTDA. Todos os direitos resevados.

"""
player.say("Digite \"agent help\" para uma lista completa de comandos do AgentTalk")