player.onChat("agent get position", function () {
    loops.pause(100)
    player.say(agent.getPosition())
})
player.onChat("agent follow me", function () {
    loops.pause(100)
    agent.teleportToPlayer()
})
player.onChat("agent", function () {
    agent.teleportToPlayer()
    player.say("Digite \"agent help\" para uma lista completa de comandos do AgentTalk")
})
agent.teleportToPlayer()
