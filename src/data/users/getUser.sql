SELECT [Id],
        [UserId],
        [Password],
        [Email],
        [Name],
        [Department],
        [EnteredOn],
        [LastUpdate],
        [SecurityLevel]
FROM    [dbo].[users]
WHERE   [Id] = @Id
ORDER BY
        [EnteredOn]